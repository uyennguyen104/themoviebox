<template>
  <ul :class="['list', isListMode ? 'listMode' : '' ]">
    <li
      v-for="item in list"
      :key="item.id"
      class="listItem"
    >
      <mv-list-item :movie="item"/>
    </li>
  </ul>
</template>

<script>
import ListItem from '@/components/movies/ListItem.vue';

export default {
  components: {
    'mv-list-item': ListItem,
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      default: 'grid',
    },
  },

  computed: {
    isListMode() {
      return this.mode === 'list';
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  --card-min-width: calc(320px - calc(2 * var(--container-spacing-x)));

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-min-width), 1fr));
  align-items: stretch;
  grid-gap: var(--grid-gutter);
  padding: var(--grid-gutter) 0;
}

@media (min-width: $tablet-width) {
  .list {
    --card-min-width: 272px;
  }
}
</style>
