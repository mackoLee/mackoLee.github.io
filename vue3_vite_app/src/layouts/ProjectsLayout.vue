<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ProjectsNavTabs from "@/components/modules/projects/ProjectsNavTabs.vue";
</script>
<template>
  <default-layout>
    <template #header-tabs>
      <projects-nav-tabs />
    </template>
    <slot />
  </default-layout>
</template>
<style lang="scss" scoped>
#main {
  min-height: 100%;
  width: 100%;
}
</style>