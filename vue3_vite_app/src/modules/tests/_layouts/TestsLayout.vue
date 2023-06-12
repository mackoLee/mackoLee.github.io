<script setup lang="ts">
import TestsTabs from "@/modules/tests/_components/TestsTabs.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>
<template>
  <default-layout>
    <template #header-tabs>
      <tests-tabs />
    </template>
    <slot />
  </default-layout>
</template>
