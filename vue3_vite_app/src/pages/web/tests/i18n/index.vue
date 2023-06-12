<script setup lang="ts">
import LocaleSelect from "@/components/modules/tests/LocaleSelect.vue";
import MainHeaderTestsTabs from "@/components/modules/TestsNavTabs.vue";
import TestsLayout from "@/layouts/TestsLayout.vue";
</script>
<template>
  <TestsLayout>
    <template #header-tabs>
      <main-header-tests-tabs />
    </template>
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
  </TestsLayout>
</template>