<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 20,
  },
  isDark: {
    type: Boolean,
    default: false,
  }
})
</script>
<template>
  <RoundButton
    color="gray"
  >
    <Icon
      v-if="$props.isDark"
      name="line-md:sunny-outline-to-moon-alt-loop-transition"
      :height="`${$props.size}`"
      :width="`${$props.size}`"
    />
    <Icon
      v-else
      name="line-md:moon-alt-to-sunny-outline-loop-transition"
      :size="`${$props.size}`"
    />
  </RoundButton>
</template>