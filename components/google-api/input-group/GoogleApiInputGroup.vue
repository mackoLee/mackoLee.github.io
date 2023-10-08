<script setup lang="ts">
const googleApiStore = useGoogleApiStore()

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Google API Key',
  },
  placeholder: {
    type: String,
    default: 'Google API Key',
  },
})
const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
<template>
  <UFormGroup
    :label="label"
  >
    <UInput
      v-model="inputValue"
      :placeholder="placeholder"
    />
  </UFormGroup>
</template>