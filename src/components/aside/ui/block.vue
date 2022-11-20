<script setup lang="ts">
interface BlockProps {
  title: string
  icon?: any
  value: string | number | Date
}
defineProps<BlockProps>()
</script>

<template>
  <div v-if="!!value" class="asideBlock py-2 px-3 rounded-3">
    <p class="asideBlock-title mb-1">
      {{ title }}
    </p>
    <div class="asideBlock-content">
      <component :is="icon" class="asideBlock-content-icon" />
      <p class="asideBlock-content-value mb-0">{{ value }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.asideBlock {
  background: rgba(55, 55, 55, 0.5);
  // background: var(--bs-gray-300);
  backdrop-filter: blur(2px);
  &-title {
    @include small;
    color: #A7A7A7;
  }
  &-content {
    display: flex;
    align-items: center;
    gap: 10px;
    &-icon {
      fill: var(--bs-body-color);
    }
    &-value {
      @include body;
    }
  }
}
</style>