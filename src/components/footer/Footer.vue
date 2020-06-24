<template>
  <footer class="footer">
    <div class="footerTop">
      <mv-logo/>
      <mv-nav/>
    </div>
    <div class="footerBottom">
      <p class="copy">Designed by Milan Houter. All rights reversed.</p>
      <mv-social-list/>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Nav from '@/components/footer/Nav.vue';
import SocialList from '@/components/footer/SocialList.vue';

export default {
  components: {
    'mv-logo': Logo,
    'mv-nav': Nav,
    'mv-social-list': SocialList,
  },

}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $white;
  padding: var(--container-spacing-y) var(--container-spacing-x);

  .footerTop,
  .footerBottom {
    display: flex;
    align-items: flex-start;
    justify-content: stretch;
    flex-direction: column;
    padding: var(--content-padding-y) 0;
  }

  .footerTop {
    padding-top: 0;
    border-bottom: 1px solid $divider-color;
  }

  .footerBottom {
    .copy {
      color: $text-muted;
      font-size: $font-size-sm;
    }
  }
}

@media (min-width: $tablet-width) {
  .footer {
    .footerTop,
    .footerBottom {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
