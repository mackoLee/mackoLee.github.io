<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 20,
  }
})

const colorMode = useColorMode()

const isDark = computed(() => {
  return colorMode.value === 'dark'
})
const onClick = (nee) => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  console.log(nee)
}
</script>
<template>
  <div>
    <ThemeButtonLayout
      :size="props.size"
      :is-dark="isDark"
      @click="onClick($options)"
    />
  </div>
</template>