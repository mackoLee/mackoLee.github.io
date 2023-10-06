<script setup lang="ts">
const googleApiStore = useGoogleApiStore()

// const onClick = () =>{
//   googleApiStore.resetAll()
// }

const items = [[
  { label: 'Reset to previous'},
  { label: 'Reset to default'}
]]
</script>
<template>
  <UDropdown
    :items="items"
  >
    <GoogleApiResetButtonLayoutV2 />
  </UDropdown>
</template>