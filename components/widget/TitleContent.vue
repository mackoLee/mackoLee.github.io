<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
})
</script>
<template>
  <div>
    <p class="text-2xl font-bold">
      <slot name="title">
        {{ props.title }}
      </slot>
    </p>

    <slot />
  </div>
</template>