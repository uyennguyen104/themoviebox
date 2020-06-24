<template>
  <el-form
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    @validate="handleValidate"
  >
    <slot/>
  </el-form>
</template>

<script>
import { isEmpty } from 'lodash-es';

export default {
  data() {
    return {
      invalidFields: [],
    };
  },

  methods: {
    elForm() {
      return this.$refs.form;
    },

    handleValidate(field, valid) {
      if (valid) {
        this.invalidFields = this.invalidFields.filter(f => f !== field);
      } else {
        if (!this.invalidFields.includes(field)) this.invalidFields.push(field);
      }

      this.$emit('form-validate', isEmpty(this.invalidFields));
    },
  },
};
</script>
