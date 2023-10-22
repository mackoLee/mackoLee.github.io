<script setup lang="ts">

const googleApiStore = useGoogleApiStore()
const onClick = () =>{
  googleApiStore.saveAll()
}
</script>
<template>
  <UButton
    @click="onClick"
  >
    {{ $t('저장') }}
  </UButton>
</template>