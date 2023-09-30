<script setup lang="ts">
const onClick = () => {
  window.open('https://github.com/MackoLee/MackoLee.github.io/tree/main-nuxt', '_blank');
}
</script>
<template>
  <GithubButtonLayout
    @click="onClick"
  />
</template>