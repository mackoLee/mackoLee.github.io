<script setup>
const onClick = () => {
  const a = document.createElement('a')
  a.href = 'http://macko.moa92.site'
  a.click()
}
</script>
<template>
  <UButton
    size="xl"
    @click="onClick"
  >
    {{ $t('Macko 놀이터로 가기') }}
  </UButton>
</template>