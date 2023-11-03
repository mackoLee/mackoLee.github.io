<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex items-center justify-between h-[--header-height]">
      <div class="flex-1">
        <HeaderLogo />
      </div>
      <div class="flex-1 gap-x-7 hidden md:flex">
        <!--        <HeaderLink to="tutorial" />-->
        <!--        <HeaderLink to="projects" />-->
      </div>
      <div class="flex-1 flex gap-2 justify-end">
        <HeaderSelectMenuI18nSwitchLocale />
        <HeaderButtonThemeSwitch />
        <HeaderButtonGithubOpen />

        <!--        <HeaderButtonGoogleApiConnect />-->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>