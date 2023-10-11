<script setup lang="ts">
import type {ModalObj, ModalLayout} from './modal.d.ts';
import defaultLayout from '~/components/modal/layouts/default.vue';
import emptyLayout from '~/components/modal/layouts/empty.vue';

const nuxtApp = useNuxtApp()

const show: Ref<boolean> = ref(false);

const localComponent = shallowRef(null)
const localSize = ref('lg');

const convertSize = ref({
  'xs': 'xs:max-w-xs',
  'sm': 'sm:max-w-sm',
  'md': 'sm:max-w-md',
  'lg': 'sm:max-w-lg',
  'xl': 'sm:max-w-xl'
})
const localPreventClose = ref(false);

function openModal(modalObj: ModalObj){
    modalObj
        .component()
        .then(res => {
          localComponent.value = res.default
          if (modalObj.size) {
            localSize.value = modalObj.size;
          }
          if (modalObj.preventClose) {
            localPreventClose.value = modalObj.preventClose;
          }
          show.value = true;
        });
}

function hideModal(){
  show.value = false;
}


nuxtApp.provide('modal', {
  open: openModal,
  hide: hideModal
})


</script>
<template>
  <u-modal
    v-model="show"
    :prevent-close="localPreventClose"
    :ui="{
      width: convertSize[localSize],
      padding: 'p-0',
    }"
  >
    <component
      :is="localComponent"
    />
  </u-modal>
</template>