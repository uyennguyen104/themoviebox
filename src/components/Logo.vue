<template>
  <h1 :class="['brandLogo', isWhite ? 'white' : '']">THEMOVIEBOX</h1>
</template>

<script>
export default {
  props: {
    isWhite: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.brandLogo {
  font-size: $font-size-h2;
  text-transform: uppercase;
  color: $gray;

  &.white {
    color: $white;
  }
}

@media (min-width: $tablet-width) {
  .brandLogo {
    font-size: $font-size-h1;
  }
}
</style>
