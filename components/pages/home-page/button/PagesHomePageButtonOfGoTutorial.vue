<template>
  <UButton
    :to="useLocaleRoute()('/tutorial')"
    size="xl"
  >
    {{ $t('튜토리얼 보러가기') }}
  </UButton>
</template>