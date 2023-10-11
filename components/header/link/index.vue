<script setup lang="ts">
const props = defineProps<{
  to: string;
}>()


</script>
<template>
  <NuxtLink
    class="font-semibold hover:text-black/75 dark:hover:text-white/75"
    :to="useLocaleRoute()(`/${props.to}`)"
  >
    {{ _upperFirst(props.to) }}
  </NuxtLink>
</template>