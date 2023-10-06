<script setup lang="ts">

const googleApiStore = useGoogleApiStore()
const onClick = () =>{
  googleApiStore.saveAll()
}
</script>
<template>
  <GoogleApiSaveButtonLayout
    @click="onClick"
  />
</template>