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
const onClick = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <UButton
      color="gray"
      :ui="{
        rounded: 'rounded-full',
        padding: {
          sm: 'p-2'
        }
      }"
      @click="onClick"
  >
      <Icon
        v-if="isDark"
        name="line-md:sunny-outline-to-moon-alt-loop-transition"
        :height="`${props.size}`"
        :width="`${props.size}`"
      />
      <Icon
        v-else
        name="line-md:moon-alt-to-sunny-outline-loop-transition"
        :size="`${props.size}`"
      />
  </UButton>
</template>