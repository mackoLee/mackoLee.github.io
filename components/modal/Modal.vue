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
const localLayout: Ref<ModalLayout> = ref('defaultLayout');
const ComputedLayout = computed(() => {
  if (localLayout.value === 'defaultLayout') {
    return defaultLayout;
  } else if (localLayout.value === 'emptyLayout') {
    return emptyLayout;
  }
})
const localLayoutProps = ref({});

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
          if (modalObj.layout) {
            localLayout.value = modalObj.layout;
          }
          if (modalObj.layoutProps) {
            localLayoutProps.value = modalObj.layoutProps;
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
    <div class="p-0">
      <ComputedLayout
        v-bind="localLayoutProps"
      >
        <component
          :is="localComponent"
        />
      </ComputedLayout>
    </div>
  </u-modal>
</template>