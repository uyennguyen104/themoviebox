<template>
  <ul class="socials">
    <li><router-link to="#" target="_blank"><img src="@/assets/fa-icon.png" alt="Facebook"/></router-link></li>
    <li><router-link to="#" target="_blank"><img src="@/assets/pin-icon.png" alt="Pinterest"/></router-link></li>
    <li><router-link to="#" target="_blank"><img src="@/assets/tw-icon.png" alt="Twitter"/></router-link></li>
    <li><router-link to="#" target="_blank"><img src="@/assets/in-icon.png" alt="LinkedIn"/></router-link></li>
  </ul>
</template>

<style lang="scss" scoped>
.socials {
  display: flex;

  li {
    padding: 0 4px;

    > a {
      &,
      &:link,
      &:visited {
        display: block;
        width: $icon-size;
        height: $icon-size;

        > img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
