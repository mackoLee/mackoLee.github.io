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
    {{ $t('연결') }}
  </UButton>
</template>