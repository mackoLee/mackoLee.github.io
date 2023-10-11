<script setup lang="ts">

const googleApiStore = useGoogleApiStore()

const clientId = computed({
  get: () => googleApiStore.clientId,
  set: (value) => googleApiStore.setClientId(value),
})

</script>
<template>
  <ModalsGoogleApiModalInputLayout
    v-model="clientId"
    label="Oauth 2.0 Client ID"
    placeholder="Oauth 2.0 Client ID"
  />
</template>