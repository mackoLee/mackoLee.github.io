<script setup lang="ts">
const onClick = () => {
  window.open('https://github.com/MackoLee/MackoLee.github.io/tree/main-nuxt', '_blank');
}
</script>
<template>
  <HeaderButtonLayoutAsRound
    :icon-name="'line-md:github'"
    @click="onClick"
  />
</template>