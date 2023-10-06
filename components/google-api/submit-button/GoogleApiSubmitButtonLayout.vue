<script setup lang="ts">

const onClick = ()=>{
  useGoogleApiStore().requestAccessToken(()=>{
    console.log('hi')
  })
}

</script>
<template>
  <UButton
    type="submit"
    variant="link"
    @click="onClick"
  >
    Connect
  </UButton>
</template>