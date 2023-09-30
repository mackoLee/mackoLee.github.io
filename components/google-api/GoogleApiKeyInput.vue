<script setup lang="ts">
const googleApiStore = useGoogleApiStore()

const apiKey = computed({
  get: () => googleApiStore.apiKey,
  set: (value) => googleApiStore.setApiKey(value),
})
</script>
<template>
  <UFormGroup
    label="Google API Key"
  >
    <UInput
      v-model="apiKey"
      placeholder="Google API Key"
    />
  </UFormGroup>
</template>