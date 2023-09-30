<script setup lang="ts">
import {ModalObj, ModalLayout} from './index.d.ts';
import defaultLayout from './layout/default.vue';
import emptyLayout from './layout/empty.vue';

const nuxtApp = useNuxtApp()

const show = ref(false);

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


nuxtApp.provide('openModal', (modalObj: ModalObj) => {
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
        show.value = true;
      });
})

nuxtApp.provide('hideModal', () => {
  show.value = false;
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
      <ComputedLayout>
        <component
          :is="localComponent"
        />
      </ComputedLayout>
    </div>
  </u-modal>
</template>