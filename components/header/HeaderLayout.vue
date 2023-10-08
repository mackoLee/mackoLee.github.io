<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="flex items-center justify-between h-[--header-height]">
      <div class="flex-1">
        <Logo />
      </div>
      <div class="flex-1 flex gap-x-8">
        <PagesPlaygroundPageLink />
        <NuxtLink
          :to="useLocalePath()('/projects')"
        >
          Projects
        </NuxtLink>
      </div>
      <div class="flex-1 flex gap-0.5 justify-end">
        <I18nSwitchLocaleSelectMenu />

        <RoundIconButton
          :icon-name="defaultIcon"
          @click="onSwitch"
        />
        <GithubOpen
          v-slot="githubOpen"
        >
          <RoundIconButton
            :icon-name="githubOpen.defaultIcon"
            @click="githubOpen.onClick"
          />
        </GithubOpen>
        <GoogleApiConnectFormShowAsModalButton />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const {defaultIcon, onSwitch} = useTheme()
</script>