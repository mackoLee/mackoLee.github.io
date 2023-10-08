<script setup lang="ts">
const nuxtApp = useNuxtApp();
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  okText: {
    type: String,
    default: '확인',
  },
  cancelText: {
    type: String,
    default: '취소',
  },
})

const emit = defineEmits(['close', 'ok', 'cancel']);

const onClose = () => {
  emit('close');
  nuxtApp.$modal.hide();
}

const onCancel = () => {
  emit('cancel');
  nuxtApp.$modal.hide();
}

const onOk = () => {
  emit('ok');
  nuxtApp.$modal.hide();
}

const localUi = computed(()=>{
  const result = {}

  if(props.hideHeader){
    result['header'] = {
      padding: 'p-0',
    }
  }
  if(props.hideFooter){
    result['footer'] = {
      padding: 'p-0',
    }
  }
  return result
})

</script>
<template>
  <u-card
    :ui="localUi"
  >
    <template #header>
      <slot name="header">
        <div
          v-if="!hideHeader"
          class="flex justify-between items-center"
        >
          <div
            class="text-lg font-semibold"
          >
            {{ title }}
          </div>
          <div class="flex">
            <icon
              class="cursor-pointer my-auto"
              name="ic:baseline-close"
              size="25"
              @click="onClose"
            />
          </div>
        </div>
      </slot>
    </template>


    <slot />
    <template #footer>
      <slot name="footer">
        <div
          v-if="!hideFooter"
          class="flex justify-end items-center"
        >
          <u-button
            variant="ghost"
            color="gray"
            @click="onCancel"
          >
            {{ props.cancelText }}
          </u-button>
          <u-button
            variant="ghost"
            color="primary"
            @click="onOk"
          >
            {{ props.okText }}
          </u-button>
        </div>
      </slot>
    </template>
  </u-card>
</template>