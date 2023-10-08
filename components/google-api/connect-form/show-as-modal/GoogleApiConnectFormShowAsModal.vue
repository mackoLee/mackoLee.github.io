<script setup lang="ts">
import type {ModalObj} from '~/components/modal/Modal.d.ts'
const onClick = () => {
  const modalObj: ModalObj = {
    component: () => import('../GoogleApiConnectFormModalLayout.vue'),
    size: 'sm',
    layout: 'emptyLayout'


  }
  useModal().open(modalObj)
}
</script>
<template>
  <GoogleApiConnectFormShowAsModalButtonLayout
    @click="onClick"
  />
</template>