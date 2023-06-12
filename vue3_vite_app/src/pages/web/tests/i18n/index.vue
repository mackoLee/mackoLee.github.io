<script setup lang="ts">
import LocaleSelect from "@/modules/tests/i18n/_components/LocaleSelect.vue";
import TestsLayout from "@/modules/tests/_layouts/TestsLayout.vue";
</script>
<template>
  <tests-layout>
    <h3>
      Locale: {{ $i18n.locale }}
      {{ $t("message.hello") }}
    </h3>
    <h4>
      <locale-select />
    </h4>
    <div>
      {{ $tc("message.n_apples", 1) }}
    </div>
    <div>
      {{ $tc("message.n_apples", 2) }}
    </div>
  </tests-layout>
</template>