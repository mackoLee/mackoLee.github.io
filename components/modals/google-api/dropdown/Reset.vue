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
    <Icon
      class="cursor-pointer transition-all hover:rotate-180"
      name="ic:baseline-refresh"
      size="25"
    />
  </UDropdown>
</template>