<script setup lang="ts">
import { assignGlobalListeners} from "@/composibles/keyboard";

assignGlobalListeners();
</script>
<template>
  <div class="earth-space">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
  .earth-space{
    position: relative;
    width: 100%;
    min-height: inherit;
    overflow: hidden;
  }
</style>