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
  googleApiStore.resetAll();
})

</script>
<template>
  <UForm
    class="flex flex-col gap-3"

    :state="googleApiStore.$state"
    :validate="validate"
    @submit="submit"
  >
    <GoogleApiKeyInput />
    <GoogleApiSpreadsheetIdInput />
    <div class="w-full border-t border-gray-200 dark:border-gray-700" />
    <GoogleApiClientIdInput />
  </UForm>
</template>