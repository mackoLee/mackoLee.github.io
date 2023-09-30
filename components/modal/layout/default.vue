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
  nuxtApp.$hideModal()
}

const onCancel = () => {
  emit('cancel');
  nuxtApp.$hideModal()
}

const onOk = () => {
  emit('ok');
  nuxtApp.$hideModal()
}

</script>
<template>
  <u-card>
    <template #header>
      <slot name="header">
        <div
          v-if="!hideHeader"
          class="flex justify-between items-center"
        >
          <div
            class="text-xl font-bold"
          >
            {{ title }}
          </div>
          <div>
            <icon
              class="cursor-pointer"
              :name="'ant-design:close-outlined'"
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