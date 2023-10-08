<script setup lang="ts">
const onClick = () => {
  window.open('https://github.com/MackoLee/MackoLee.github.io/tree/main-nuxt', '_blank');
}
</script>
<template>
  <div>
    <slot
      :default-icon="`mdi:github`"
      :on-click="onClick"
    />
  </div>
</template>