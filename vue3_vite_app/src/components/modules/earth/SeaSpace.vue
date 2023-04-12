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
    width: 100%;
    min-height: 50vh;
    bottom:0;
    background: linear-gradient(to bottom, #0000ff, #1E90FF);
  }
</style>