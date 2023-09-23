<script setup>
</script>
<template>
  <div class="light">
    <div
      class="bg-light dark:bg-black min-h-screen flex flex-col justify-between"
    >
      <header class="h-[--header-height]">
        <LayoutHeader />
        <div class="border-t border-t-gray-700 w-full" />
      </header>
      <div
        name="content"
        class="flex-1"
      >
        <slot>
          content
        </slot>
      </div>
      <footer class="bg-white dark:bg-black h-[--footer-height] sticky bottom-0">
        <div class="border-t border-t-gray-700 w-full" />
        <LayoutFooter />
      </footer>
    </div>
  </div>
</template>