<script setup lang="ts">
</script>
<template>
  <div class="sea-space">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
  .sea-space{
    position: absolute;
    width: 120%;
    min-height: 50%;
    left: -20%;
    bottom:0;
    background: linear-gradient(to bottom, #0000ff, #1E90FF);
  }
</style>