<template>
  <div class="movieItem">
    <div class="thumbWrap">
      <img v-if="thumbSrc" :src="thumbSrc" :alt="movie.title" class="thumb"/>
      <span class="date">{{ releaseYear }}</span>
    </div>
    <div class="movieCap">
      <div class="content">
        <h4 class="title">{{ movie.title }}</h4>
        <p class="tag">{{ genres ? genres : `__` }}</p>
      </div>
      <span class="vote">{{ movie.vote_average }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { uniqBy } from 'lodash-es';
import { getYear } from 'date-fns';
import { getDate } from '@/common/date';
import { POSTER_URL } from '@/common/config';

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    }
  },

  computed: {
    ...mapGetters(['movieList', 'tvList']),

    genreList() {
      return uniqBy([...this.movieList, ...this.tvList], 'id');
    },
    thumbSrc() {
      return this.movie.poster_path ? `${POSTER_URL}/${this.movie.poster_path}` : '';
    },
    genres() {
      return this.movie.genre_ids.map(value => {
          const theGenre = this.genreList.find(item => item.id === value);
          return theGenre ? theGenre.name : '';
        }
      ).join(', ');
    },
    releaseYear() {
      return getYear(getDate(this.movie.release_date));
    },
  },
};
</script>

<style lang="scss" scoped>
.movieItem {
  background-color: $white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
  border-radius: $border-radius-base;

  .thumbWrap {
    position: relative;
    padding-bottom: 150%;

    .thumb {
      position: absolute;
      height: 100%;
      width: auto;
      max-width: 100%;
      left: 0;
      top: 0;
      display: block;
      border-radius: $border-radius-base $border-radius-base 0 0;
    }

    .date {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: var(--content-padding-y) var(--content-padding-x);
      color: $gray-1;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.13);
      font-size: $font-size-md;
      display: block;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
    }
  }

  .movieCap {
    padding: var(--content-padding-y) var(--content-padding-x);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title,
    .tag {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title {
      color: $gray;
      font-size: $font-size-lg;
    }
    .tag {
      font-size: $font-size-sm;
      color: $text-muted;
    }

    .content {
      padding-right: var(--content-padding-x);
      flex: 1 1 0;
      overflow: hidden;
    }

    .vote {
      color: $primary;
      border: 1px solid $primary;
      border-radius: $border-radius-base;
      padding: calc(0.25 * var(--content-padding-y)) calc(0.75 * var(--content-padding-x));
    }
  }
}
</style>
