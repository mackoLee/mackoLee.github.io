<script setup lang="ts">

definePageMeta({
  layout: 'default-header-footer',
})
</script>
<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
  >
    <div class="py-24 sm:py-32 max-w-[700px]">
      <PagesHomeTextTitle />
      <PagesHomeTextDescription />
      <div class="mt-12">
        <PagesHomeButtonGoTutorial />
      </div>
    </div>
  </div>
</template>