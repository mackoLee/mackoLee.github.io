<script setup lang="ts">
document.querySelector('html').setAttribute('lang', useI18n().locale.value);
useDayjs().locale(useI18n().locale.value);
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Modal />
    <UNotifications />
  </div>
</template>
