<script setup lang="ts">

const props = defineProps({
  ui: {
    type: Object,
    default: () => ({}),
  },
  iconName: {
    type: String,
    default: '',
  },
  iconSize: {
    type: Number,
    default: 20,
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
    color="gray"
  >
    <Icon
      :name="iconName"
      :height="`${$props.iconSize}`"
      :width="`${$props.iconSize}`"
    />
  </UButton>
</template>
