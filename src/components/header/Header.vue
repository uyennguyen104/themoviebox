<template>
  <header class="header">
    <mv-logo is-white/>
    <mv-header-buttons/>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue';
import HeaderButtons from '@/components/header/HeaderButtons.vue';

export default {
  components: {
    'mv-logo': Logo,
    'mv-header-buttons': HeaderButtons,
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(to bottom, $black 0%, transparent 100%);
  position: absolute;
  z-index: 9;
  width: 100%;
  left: 0;
  top: 0;
  padding: var(--container-spacing-y) var(--container-spacing-x);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.13);
}

@media (min-width: $tablet-width) {
  .header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
