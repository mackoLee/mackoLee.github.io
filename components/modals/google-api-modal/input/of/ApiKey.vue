<script setup lang="ts">
const googleApiStore = useGoogleApiStore()

const apiKey = computed({
  get: () => googleApiStore.apiKey,
  set: (value) => googleApiStore.setApiKey(value),
})
</script>
<template>
  <ModalsGoogleApiModalInputLayout
    v-model="apiKey"
    name="apiKey"
  />
</template>