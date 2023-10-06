<script setup lang="ts">
const googleApiStore = useGoogleApiStore()

const spreadsheetId = computed({
  get: () => googleApiStore.spreadsheetId,
  set: (value) => googleApiStore.setSpreadsheetId(value),
})
</script>
<template>
  <GoogleApiInputLayout
    v-model="spreadsheetId"
    label="Spreadsheet ID"
    placeholder="Spreadsheet ID"
  />
</template>