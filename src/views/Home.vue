<template>
  <div>
    <mv-header/>
    <mv-home-banners/>
    <mv-movies-list/>
    <mv-footer/>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import HomeBanners from '@/components/banners/HomeBanners.vue';
import MoviesList from '@/components/movies/MoviesList.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    'mv-header': Header,
    'mv-home-banners': HomeBanners,
    'mv-movies-list': MoviesList,
    'mv-footer': Footer,
  },
};
</script>
