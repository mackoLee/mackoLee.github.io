<script lang="ts" setup>
import JoyStick from "@/components/JoyStick.vue";
import {useShipStore} from "@/stores/ship";
import {Vector2D} from "@/utils/custom_math";
import {onMounted, onUnmounted, ref} from "vue";
import {Ref} from "vue";

const shipStore = useShipStore();

const localVector: Ref<Vector2D> = ref({
  angle: 0,
  value: 0
})

localVector.value

let timer: any = null;
onMounted(()=>{
    timer = setInterval(()=>{
        localVector.value = lastMove.value;
        shipStore.accelerate(localVector.value.angle, localVector.value.value)
    }, 100)
})
onUnmounted(()=>{
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
  <joy-stick
    style="z-index:100"
    left="30"
    bottom="30"
    @move="onMove"
  />
</template>