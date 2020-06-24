<template>
  <nav class="nav">
    <ul>
      <li><router-link to="#">About</router-link></li>
      <li><router-link to="#">Movies</router-link></li>
      <li><router-link to="#">Ratings</router-link></li>
      <li><router-link to="#">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      padding: 0 var(--content-padding-x);

      > a {
        &,
        &:link,
        &:visited {
          font-size: $font-size-base;
        }
      }
    }
  }
}
</style>
