<template>
  <div class="listControls">
    <div class="left">
      <mv-types-list @change="$emit('change-type', $event)"/>
      <mv-genre-list/>
    </div>
    <div class="right">
      <mv-mode-switch @change="$emit('change-mode', $event)"/>
    </div>
  </div>
</template>

<script>
import GenreList from '@/components/controls/GenreList.vue';
import ModeSwitch from '@/components/controls/ModeSwitch.vue';
import TypesList from '@/components/controls/TypesList.vue';

export default {
  components: {
    'mv-types-list': TypesList,
    'mv-genre-list': GenreList,
    'mv-mode-switch': ModeSwitch,
  },
};
</script>

<style lang="scss" scoped>
.listControls {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  border-bottom: 1px solid $divider-color;
  padding-bottom: 1px;
}

@media (min-width: $tablet-width) {
  .listControls {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
