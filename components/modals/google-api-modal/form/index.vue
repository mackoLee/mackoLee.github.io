<script setup lang="ts">
const googleApiStore = useGoogleApiStore()

function validate(state:any) {
  const errors = []
  if(state.apiKey === '') {
    errors.push({ path: 'apiKey', message: 'Required' })
  }
  return errors

}

function submit(state:any) {
  const a = document.createElement('a');
  a.href = 'https://accounts.google.com/o/oauth2/v2/auth?'
            +'client_id=' + state.data.clientId
            +'&redirect_uri=http://localhost:3000/token/callback'
            +'&response_type=token'
            +'&scope=https://www.googleapis.com/auth/spreadsheets';
  a.click();
}

onUnmounted(() => {
  googleApiStore.resetAll();
})

</script>
<template>
  <UForm
    :state="googleApiStore.$state"
    :validate="validate"
    @submit="submit"
  >
    <slot />
  </UForm>
</template>