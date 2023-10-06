<template>
  <div
    class="bg-light dark:bg-black min-h-screen flex flex-col justify-between"
  >
    <header class="h-[--header-height]">
      <Header />
      <div class="border-t border-t-gray-700 w-full" />
    </header>
    <div class="flex-1">
      <pre
        id="content"
        style="white-space: pre-wrap;"
      />

      <slot>
        content
      </slot>
    </div>
    <footer class="bg-white dark:bg-black h-[--footer-height] sticky bottom-0">
      <div class="border-t border-t-gray-700 w-full" />
      <Footer />
    </footer>
  </div>
</template>