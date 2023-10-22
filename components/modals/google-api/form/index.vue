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
  // a.href = useOauth2Client().generateAuthUrl({
  //   scope: 'https://www.googleapis.com/auth/spreadsheets',
  //   client_id: state.data.clientId,
  //   redirect_uri: 'http://localhost:3000/token/callback',
  //   response_type: 'token',
  // });
  a.href = useOauth2Client().generateAuthUrl({
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    client_id: state.data.clientId,
    redirect_uri: 'http://localhost:3000/code/callback',
    response_type: 'code',
  })

  // console.log(a.href)
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