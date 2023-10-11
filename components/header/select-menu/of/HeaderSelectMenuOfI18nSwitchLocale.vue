<script setup lang="ts">
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

const options = useI18nStore().localeOptions;


</script>
<template>
  <HeaderSelectMenuLayout
    v-model="locale"
    :options="options"
  />
</template>