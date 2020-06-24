<template>
  <div class="rating">
    <p class="title">Rating <span>based on {{ cmpVoteCount }} reviews</span></p>
    <el-rate
      v-model="vote"
      disabled
      show-score
      void-color="#ff0278"
      disabled-void-color="#ff0278"
      void-icon-class="el-icon-star-off"
      disabled-void-icon-class="el-icon-star-off"
      text-color="#ffffff"
      score-template="{value}">
    </el-rate>
  </div>
</template>

<script>
export default {
  props: {
    voteCount: {
      type: Number,
      default: 0,
    },
    voteAverage: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    vote: {
      get() {
        return this.voteAverage;
      },
      set(value) {
        this.$emit('update:voteAverage', value);
      },
    },
    cmpVoteCount() {
      return this.voteCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid $gray;
  border-radius: $border-radius-base;
  padding: calc(0.75 * var(--content-padding-y)) var(--content-padding-x);
}
.title {
  color: $white;
  font-size: $font-size-sm;
  padding-bottom: calc(0.5 * var(--content-padding-y));

  > span {
    color: $body-color;
    font-size: $font-size-xs;
  }
}
</style>
