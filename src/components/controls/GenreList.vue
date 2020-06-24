<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      Genre <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in genreList"
        :key="item.id"
      >
        {{ item.name }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from 'vuex';
import { uniqBy } from 'lodash-es';

export default {
  computed: {
    ...mapGetters(['movieList', 'tvList']),

    genreList() {
      return uniqBy([...this.movieList, ...this.tvList], 'id');
    },
  }
}
</script>
