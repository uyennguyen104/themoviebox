<template>
  <el-radio-group v-model="type" @change="handleChange">
    <el-radio-button label="popular">Popular</el-radio-button>
    <el-radio-button label="top_rated">Top Rated</el-radio-button>
    <el-radio-button label="upcoming">Upcoming</el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  data() {
    return {
      type: 'popular',
    };
  },

  methods: {
    handleChange(value) {
      this.$emit('change', value);
    },
  },
}
</script>
