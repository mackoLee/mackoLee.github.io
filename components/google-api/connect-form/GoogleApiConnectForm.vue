<script setup lang="ts">
const googleApiStore = useGoogleApiStore()



function validate(state) {
  const errors = []
  if(state.apiKey === '') {
    errors.push({ path: 'apiKey', message: 'Required' })
  }
  return errors

}

function submit(state) {
  // useIntroduceApi().updateRow();
}

onUnmounted(() => {
  googleApiStore.loadAll();
})

</script>
<template>
  <GoogleApiConnectFormLayout
    :state="googleApiStore"
    :validate="validate"
    @submit="submit"
  />
</template>