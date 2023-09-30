<script setup lang="ts">

const props = defineProps({
  ui: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<template>
  <UButton
    :ui="{
      rounded: 'rounded-full',
      padding: {
        sm: 'p-2'
      },
      ...props.ui
    }"
  >
    <slot />
  </UButton>
</template>