<script lang="ts" setup>
import JoyStick from "@/components/JoyStick.vue";
import {useShipStore} from "@/stores/shipStore";
import {Vector2D} from "@/utils/custom_math";
import {onMounted, ref} from "vue";
import {Ref} from "vue";

const shipStore = useShipStore();

const localVector: Ref<Vector2D> = ref({
  angle: 0,
  value: 0
})

localVector.value

onMounted(()=>{
    setInterval(()=>{
        localVector.value = lastMove.value;
        shipStore.accelerate(localVector.value.angle, localVector.value.value)
    }, 100)
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
    :x="30"
    :y="30"
    @move="onMove"
  />
</template>