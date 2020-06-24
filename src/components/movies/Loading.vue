<template>
  <div class="wrap">
    <img src="@/assets/loading-icon.png" alt="Loading"/>
    <span>Loading</span>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    max-width: calc(2 * var(--grid-gutter));
    height: auto;
    display: block;
  }

  > span {
    display: block;
    color: $text-muted;
    text-transform: uppercase;
    font-size: $font-size-base;
    padding-top: 8px;
  }
}
</style>
