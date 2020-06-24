<template>
  <el-radio-group v-model="mode" @change="handleChange" class="switchModeGroup">
    <el-radio-button label="grid" class="gridModeButton">Grid</el-radio-button>
    <el-radio-button disabled label="list" class="listModeButton">List</el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      mode: 'grid',
    };
  },

  methods: {
    handleChange(value) {
      this.$emit('change', value);
    },
  },
}
</script>

<style lang="scss">
.switchModeGroup.el-radio-group {
  margin-bottom: 0;

  .gridModeButton,
  .listModeButton {
    .el-radio-button__inner {
      text-indent: -2000rem;
      background: url('../../assets/collection-icon.png') no-repeat center center;
      background-size: contain;
      width: $icon-size;
      border-bottom: none !important;
      padding: 0;
      margin-left: calc(0.5 * var(--grid-gutter));
    }
  }

  .listModeButton {
    .el-radio-button__inner {
      width: $icon-size;
      background-image: url('../../assets/list-icon.png');
    }
  }
}
</style>
