<script setup lang="ts">
import type {ModalObj} from '~/components/modal/Modal.d.ts'
const onClick = () => {
  const modalObj: ModalObj = {
    component: () => import('~/components/modals/google-api/index.vue'),
    size: 'sm',
  }
  useModal().open(modalObj)
}
</script>
<template>
  <HeaderButtonLayout
    :icon-name="`logos:google-icon`"
    color="white"
    @click="onClick"
  >
    {{ $t('구글 연동하기') }}
  </HeaderButtonLayout>
</template>