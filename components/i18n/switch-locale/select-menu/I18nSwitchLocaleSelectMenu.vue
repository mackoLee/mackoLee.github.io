<script setup lang="ts">
import localeOptions from "~/components/i18n/localeOptions";

const locale = computed({
  get: () => {
    const locale = useI18n().locale.value;
    return options.find(option => option.value === locale);
  },
  set: (option) => {
    useRouter().push(useSwitchLocalePath()(option.value));
    document.querySelector('html').setAttribute('lang', option.value);
    // useI18n().setLocale(option.value);
  }
})

const options = localeOptions;


</script>
<template>
  <I18nSwitchLocaleSelectMenuLayout
    v-model="locale"
    :options="options"
  />
</template>