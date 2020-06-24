<template>
  <div class="container-fluid page">
    <mv-header/>
    <div class="main">
      <router-view />
    </div>
    <mv-footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    'mv-header': Header,
    'mv-footer': Footer,
  },
}
</script>
