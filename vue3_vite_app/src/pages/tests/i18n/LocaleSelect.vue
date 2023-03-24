<script setup lang="ts">
import {usePlugins} from "@/composibles/plugins";

// const { i18n } = usePlugins();

import {computed, ref} from "vue";

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