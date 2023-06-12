<script setup lang="ts">
const locales = [
  { label: "English", value: "en" },
  { label: "Korean", value: "ko" },
];


</script>
<template>
  <q-option-group
    v-model="$i18n.locale"
    type="radio"
    :options="locales"
    label="Select a locale"
  />
</template>