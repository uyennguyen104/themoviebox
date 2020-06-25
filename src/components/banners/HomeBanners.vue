<template>
  <div class="homeBanners">
    <el-carousel trigger="click" arrow="never" class="homeBanners">
      <el-carousel-item v-for="banner in banners" :key="banner.id">
        <mv-banner-item :banner="banner"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import BannerItem from '@/components/banners/BannerItem.vue';

export default {
  components: {
    'mv-banner-item': BannerItem,
  },

  data() {
    return {
      banners: [
        {
          id: 1,
          bitmap: require('@/assets/bitmap.jpg'),
          title: 'Warth of the Titans',
          genres: ['Fantasy', 'Animation', 'Family'],
          duration: 6720000,
          voteAverage: 3.4,
          voteCount: 3546,
        },
        {
          id: 2,
          bitmap: require('@/assets/bitmap.jpg'),
          title: 'Warth of the Titans',
          genres: ['Fantasy', 'Animation', 'Family'],
          duration: 6720000,
          voteAverage: 3.4,
          voteCount: 3546,
        },
        {
          id: 3,
          bitmap: require('@/assets/bitmap.jpg'),
          title: 'Warth of the Titans',
          genres: ['Fantasy', 'Animation', 'Family'],
          duration: 6720000,
          voteAverage: 3.4,
          voteCount: 3546,
        }
      ]
    }
  },
};
</script>

<style lang="scss">
.homeBanners {
  .el-carousel__container {
    height: auto;
    padding-bottom: 140%;
  }
  .el-carousel__indicator {
    padding-top: 2px;
    padding-bottom: 0;

    .el-carousel__button {
      opacity: 1;
      height: (0.75 * $icon-size);
      border-radius: $border-radius-lg;
      background-color: $secondary;
    }

    &.is-active .el-carousel__button {
      background-color: $primary;
    }
  }
}

@media (min-width: $mobile-md-width) {
  .homeBanners {
    .el-carousel__container {
      padding-bottom: 90%;
    }
  }
}

@media (min-width: $tablet-width) {
  .homeBanners {
    .el-carousel__container {
      padding-bottom: 41%;
    }
    .el-carousel__indicator {
      padding-top: var(--content-padding-y);
      padding-bottom: var(--content-padding-y);
    }
  }
}
</style>
