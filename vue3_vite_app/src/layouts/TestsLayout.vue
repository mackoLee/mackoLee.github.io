<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import TestsNavTabs from "@/components/modules/TestsNavTabs.vue";
</script>
<template>
  <default-layout>
    <template #header-tabs>
      <tests-nav-tabs />
    </template>
    <slot />
  </default-layout>
</template>
