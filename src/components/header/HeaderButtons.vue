<template>
  <ul class="buttons">
    <li>
      <el-button type="text" class="searchBtn"><span class="icon">Search</span></el-button>
    </li>
    <li>
      <el-button type="text" class="loginBtn">Login</el-button>
    </li>
    <li>
      <el-button type="primary">Sign Up</el-button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  align-items: center;

  > li + li {
    padding-left: var(--grid-gutter);
  }

  .searchBtn {
    .icon {
      display: block;
      width: calc(0.5 * var(--grid-gutter));
      text-indent: -1000rem;
      background: url('../../assets/search-icon.png') no-repeat 0 0;
      background-size: contain;
    }
  }

  .loginBtn {
    color: $white;
  }
}
</style>
