<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex items-center justify-between h-[--header-height]">
      <div class="flex-1">
        <Logo />
      </div>
      <div class="flex-1 flex gap-x-8">
        <NuxtLink
          class="text-sm font-semibold"
          to="/projects"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          class="text-sm font-semibold"
          to="/projects"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          class="text-sm font-semibold"
          to="/projects"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          class="text-sm font-semibold"
          to="/projects"
        >
          Projects
        </NuxtLink>
      </div>
      <div class="flex-1 flex gap-0.5 justify-end">
        <ThemeButton />
        <GithubButton />
        <GoogleApiConnectModalShowBtn />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>