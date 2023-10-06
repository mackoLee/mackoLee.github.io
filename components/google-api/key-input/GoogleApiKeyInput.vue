<script setup lang="ts">
const googleApiStore = useGoogleApiStore()

const apiKey = computed({
  get: () => googleApiStore.apiKey,
  set: (value) => googleApiStore.setApiKey(value),
})
</script>
<template>
  <GoogleApiInputLayout
    v-model="apiKey"
    name="apiKey"
  />
</template>