<script lang="ts" setup>
import {useShipStore} from "@/stores/ship";
import {Vector2D} from "@/utils/custom_math";
import {onMounted, onUnmounted, ref} from "vue";
import {Ref} from "vue";
import Keyboard from "@/components/Keyboard.vue";

const shipStore = useShipStore();

const localVector: Ref<Vector2D> = ref({
  angle: 0,
  value: 0
})

localVector.value

let timer: any = null;
onMounted(() => {
  timer = setInterval(() => {
    localVector.value = lastMove.value;
    shipStore.accelerate(localVector.value.angle, localVector.value.value)
  }, 100)
})
onUnmounted(() => {
  clearInterval(timer)
})


const lastMove: Ref<Vector2D> = ref({
  value: 0,
  angle: 0
})
const onMove = (vector: Vector2D) => {
  lastMove.value = vector
}
</script>

<template>
  <keyboard
    style="z-index:100"
    right="30"
    bottom="30"
    @move="onMove"
  />
</template>