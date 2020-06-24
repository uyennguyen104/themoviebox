<template>
  <div class="bannerItem">
    <img class="poster" :src="banner.bitmap" :alt="banner.title"/>
    <div class="content">
      <div class="caption">
        <h2 class="title">{{ banner.title }}</h2>
        <ul class="genres-duration">
          <li v-for="item in banner.genres" :key="item">{{ item }}</li>
          <li class="divider">|</li>
          <li>Duration: {{ cmpDuration }}</li>
        </ul>
        <div class="buttons">
          <el-button type="primary">Watch Movie</el-button>
          <el-button type="default" plain>View Info</el-button>
          <el-button type="text" icon="el-icon-plus">Add to Wishlist</el-button>
        </div>
      </div>
      <div class="ratingWrap">
        <mv-rating :vote-count="banner.voteCount" :vote-average="banner.voteAverage"/>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/banners/Rating.vue';

export default {
  components: {
    'mv-rating': Rating,
  },

  props: {
    banner: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    cmpDuration() {
      const h = Math.floor(this.banner.duration / (60*60*1000));
      const m = Math.floor((this.banner.duration % (60*60*1000)) / (60*1000));
      const s = ((this.banner.duration % (60*60*1000)) % (60*1000)) / 1000;
      return `${h > 0 ? h + 'h ': ''}${m > 0 ? m + 'm ' : ''}${s > 0 ? s + 's' : ''}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.bannerItem {
  position: relative;
  width: 100%;
  height: 100%;
}
.poster {
  display: block;
  width: auto;
  height: 100%;
  transform-origin: center center;
  transform: translateX(-50%);

}
.content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, $black 0%, $black 40%, transparent 100%);
  padding: calc(1.5 * var(--grid-gutter)) var(--container-spacing-x);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: $gray-1;
}
.caption {
  padding-bottom: calc(1.5 * var(--grid-gutter));

  .title {
    font-size: 2rem;
    text-transform: uppercase;
    color: $white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .genres-duration {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > li {
      color: $body-color;
      font-size: $font-size-sm;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.13);

      & + li {
        padding-left: calc(0.5 * var(--grid-gutter));
      }

      &.divider {
        font-size: $font-size-lg;
      }
    }
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-top: calc(0.5 * var(--grid-gutter));
  }
}

@media (min-width: $tablet-width) {
  .caption {
    padding-bottom: 0;

    .title {
      font-size: 4rem;
    }
  }
  .poster {
    max-width: 100%;
    height: auto;
    transform: none;
  }
  .content {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}
</style>
