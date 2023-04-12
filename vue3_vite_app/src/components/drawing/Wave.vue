<script setup lang="ts">

const props = defineProps({
  color: {
    type: String,
    default: "blue"
  },
  width: {
    type: Number,
    default: 30
  },
  height: {
    type: Number,
    default: 10
  }
})
</script>
<template>
  <svg
    :height="height"
    :width="width"
  >
    <path
      :d="`M 0 ${height} q ${width/2} -${height/2} ${width/2} -${height}`"
      :stroke="color"
      stroke-width="3"
      fill="none"
    />
    <path
      :d="`M ${width/2} 0 q ${height} ${height} ${width/2} ${height}`"
      :stroke="color"
      stroke-width="3"
      fill="none"
    />
  </svg>
</template>