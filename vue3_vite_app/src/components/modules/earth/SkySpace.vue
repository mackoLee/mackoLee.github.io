<script setup lang="ts">
</script>
<template>
  <div class="sky-space">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
  .sky-space{
    position: relative;
    width: 100%;

    background-image: linear-gradient(to bottom, #1E90FF, #87CEFA);
    min-height: inherit;
  }
</style>