<script setup lang="ts">
const locale = computed({
  get: () => {
    const locale = useI18n().locale.value;
    return options.find(option => option.value === locale);
  },
  set: (option) => {
    useRouter().push(useSwitchLocalePath()(option?.value));
    // useI18n().setLocale(option.value);
  }
})

const options = useI18nStore().localeOptions;


</script>
<template>
  <USelectMenu
    v-model="locale"
    :options="options"
    :ui-menu="{
      width: 'w-[150px]',
    }"
  >
    <HeaderButtonLayoutAsRound
      :icon-name="`ion:language`"
    />
  </USelectMenu>
</template>