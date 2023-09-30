<script setup lang="ts">
const onClick = () => {
  useModal().open({
    component: () => import('../GoogleApiConnectModal.vue'),
    size: 'sm',
    props: {
      title: '구글 연동하기',
    }
  })
}
</script>
<template>
  <GoogleApiConnectModalShowBtnLayout
    @click="onClick"
  />
</template>