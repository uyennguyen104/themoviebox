<template>
  <div class="moviesList">
    <mv-list-controls
      @change-type="handleChangeType"
      @change-mode="handleChangeMode"
    />
    <mv-list
      :list="list"
      :mode="listView"
    />
    <mv-loading ref="loadingIcon" v-if="!noMoreItem"/>
  </div>
</template>

<script>
import { uniqBy } from 'lodash-es';

import {
  FETCH_MOVIES,
  GET_MOVIE_LIST,
  GET_TV_LIST,
} from '@/store/actions.type';

import ListControls from '@/components/controls/ListControls.vue';
import Loading from '@/components/movies/Loading.vue';
import List from '@/components/movies/List.vue';

export default {
  components: {
    'mv-list-controls': ListControls,
    'mv-loading': Loading,
    'mv-list': List,
  },

  data() {
    return {
      moviesList: [],
      totalPages: 1,
      listParams: {
        type: 'popular',
        page: 1,
      },
      listView: 'grid',
      loading: false,
    };
  },

  computed: {
    noMoreItem() {
      return this.listParams.page > this.totalPages;
    },
    loadMoreDisabled() {
      return this.loading || this.noMoreItem;
    },
    list() {
      return uniqBy(this.moviesList, 'id');
    },
  },

  mounted() {
    this.getMovieList();
    this.getTVList();
    this.fetchMovies();

    this.$nextTick(function() {
      window.addEventListener('scroll', this.handleScroll);
    });
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    getMovieList() {
      this.$store.dispatch(GET_MOVIE_LIST);
    },

    getTVList() {
      this.$store.dispatch(GET_TV_LIST);
    },

    async fetchMovies() {
      this.loading = true;
      if (this.listParams.page === 1) {
        this.moviesList = [];
      }

      const data = await this.$store.dispatch(FETCH_MOVIES, this.listParams);

      this.moviesList = this.listParams.page === 1 ? [...data.results] : this.moviesList.concat(...data.results);
      this.listParams = { ...this.listParams, page: data.page + 1 };
      this.totalPages = data.total_pages;
      this.loading = false;
    },

    handleChangeType(value) {
      this.listParams = { ...this.listParams, type: value, page: 1 };
      this.fetchMovies();
    },

    handleChangeMode(value) {
      this.listView = value;
    },

    handleScroll() {
      const loadingIconEl = this.$refs.loadingIcon;
      if (!loadingIconEl) return;
      const isAtBottom = (window.innerHeight + window.scrollY) >= (loadingIconEl.$el.offsetTop + loadingIconEl.$el.offsetHeight);
      if (isAtBottom && !this.loadMoreDisabled) {
        //this.fetchMovies();
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.moviesList {
  background-color: $gray-2;
  padding: var(--container-spacing-y) var(--container-spacing-x);
}
</style>
