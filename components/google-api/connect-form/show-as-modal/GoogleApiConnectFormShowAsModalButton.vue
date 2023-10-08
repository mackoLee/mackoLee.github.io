<template>
  <div>
    <slot
      :on-click="onClick"
    >
      <UButton
        @click="onClick"
      >
        <Icon name="mdi:key-link" />
        구글 연동하기
      </UButton>
    </slot>
  </div>
</template>
<script setup lang="ts">
import { onClick } from './GoogleApiConnectFormShowAsModal'
</script>