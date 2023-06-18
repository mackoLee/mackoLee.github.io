<script setup lang="ts">

const props = defineProps({
  bottom: {
    type: String,
    default: "30",
  },
  right: {
    type: String,
    default: "30",
  },
});

const emit = defineEmits(['move']);
</script>
<template>
  <div
    class="keypads"
    :style="{
      bottom: bottom+'px',
      right: right+'px',
    }"
  >
    <div class="row q-gutter-sm">
      <div class="col" />
      <div class="col keypad">
        <q-icon
          name="fas fa-caret-up"
          @mousedown="()=>$emit('move', {angle: Math.PI*3/2, value: 1})"
          @touchstart="()=>$emit('move', {angle: Math.PI*3/2, value: 1})"
          @mouseup="()=>$emit('move', {angle: Math.PI*3/2, value: 0})"
        />
      </div>
      <div class="col" />
    </div>
    <q-space class="q-mt-sm" />
    <div class="row q-gutter-sm">
      <div class="col-4 keypad">
        <q-icon
          name="fa-solid fa-caret-left"
          @mousedown="()=>$emit('move', {angle: Math.PI, value: 1})"
          @touchstart="()=>$emit('move', {angle: Math.PI, value: 1})"
          @mouseup="()=>$emit('move', {angle: Math.PI, value: 0})"
        />
      </div>
      <div class="col-4 keypad">
        <q-icon
          name="fas fa-caret-down"
          @mousedown="()=>$emit('move', {angle: Math.PI/2, value: 1})"
          @touchstart="()=>$emit('move', {angle: Math.PI/2, value: 1})"
          @mouseup="()=>$emit('move', {angle: Math.PI/2, value: 0})"
        />
      </div>
      <div class="col-4 keypad">
        <q-icon
          name="fas fa-caret-right"
          @mousedown="()=>$emit('move', {angle: 0, value: 1})"
          @touchstart="()=>$emit('move', {angle: 0, value: 1})"
          @mouseup="()=>$emit('move', {angle: 0, value: 0})"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.keypads {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: transparent;

  .keypad {
    display: flex;
    height: 45px;
    width: 45px;
    background: #fff;
    opacity: 0.5;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
</style>