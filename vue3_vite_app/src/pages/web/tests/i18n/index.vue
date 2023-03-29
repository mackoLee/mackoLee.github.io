<script setup lang="ts">
import LocaleSelect from "@/components/modules/tests/_LocaleSelect.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>
<template>
  <DefaultLayout>
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
  </DefaultLayout>
</template>