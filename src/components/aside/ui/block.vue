<script setup lang="ts">
export interface BlockProps {
  title: string
  icon: any
  value: string | number | Date
  href: string | null
}
defineProps<BlockProps>();
</script>

<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    class="asideBlock py-2 px-3 rounded-3 placeholder-glow"
  >
    <p class="asideBlock-title mb-1">
      {{ title }}
    </p>
    <div class="asideBlock-content">
      <component :is="icon" class="asideBlock-content-icon" />
      <p class="asideBlock-content-value mb-0 w-100">
        {{ value }}
        <span v-if="!value" class="placeholder w-100" />
      </p>
    </div>
  </component>
</template>

<style scoped lang="scss">
.asideBlock {
  min-width: 100px;
  background: rgba(55, 55, 55, 0.5);
  backdrop-filter: blur(2px);
  text-decoration: none;
  &-title {
    @include small;
    color: #A7A7A7;
  }
  &-content {
    display: flex;
    align-items: center;
    gap: 10px;
    &-icon {
      width: auto;
      min-width: fit-content;
      fill: var(--bs-body-color);
    }
    &-value {
      @include body;
      color: white;
    }
  }
}
</style>
