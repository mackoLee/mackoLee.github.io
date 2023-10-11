<script setup lang="ts">
const props = defineProps({
  iconName: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <UButton>
    <template #leading>
      <Icon
        :name="`${props.iconName}`"
        size="20"
      />
    </template>
    <slot />
  </UButton>
</template>