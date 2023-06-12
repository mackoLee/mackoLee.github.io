<script lang="ts" setup>

import {onMounted, onUnmounted, Ref, ref} from "vue";
import {Vector2D, getX, getY, makeVector2D} from "@/utils/custom_math";

const props = defineProps({
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    },
    size: {
        type: Number,
        default: 120
    }
})

const emit = defineEmits(['move'])

const stickLocation: Ref<Vector2D> = ref({
    value: 0,
    angle: 50
})
const setStickLocation = (vector: Vector2D) => {
    const value = Math.min(Math.max(vector.value, 0), props.size)
    const angle = vector.angle
    stickLocation.value = {
        value,
        angle
    }
    const moveVector = {
        angle,
        value: value / props.size
    }
    emit('move', moveVector);
}
const onTouchPan = (ev: any) => {
    const offset = ev.offset;
    const delta = ev.delta;

    const vector = makeVector2D( offset.x-delta.x, offset.y-delta.y)

    setStickLocation(vector)
}

const onMousedown = (ev: any) =>{
}

const resetStickLocation = () => {
    setTimeout(() => {
        setStickLocation(makeVector2D(0, 0))
    }, 100);
}

onMounted(() => {
    window.addEventListener('mouseup', resetStickLocation)
    window.addEventListener('touchend', resetStickLocation)
})
onUnmounted(() => {
    window.removeEventListener('mouseup', resetStickLocation)
    window.removeEventListener('touchend', resetStickLocation)
})

</script>
<template>
  <div
    class="joystick"
    :style="{
      left: props.x+'px',
      bottom: props.y+'px'
    }"
  >
    <div
      class="joystick__base"
    />
    <q-card
      v-touch-pan.prevent.mouse="onTouchPan"

      class="joystick__stick"
      :style="{
        transform: `translateX(${getX(stickLocation)-50}%) translateY(${getY(stickLocation)-50}%)`
      }"
    >
      <q-tooltip>
        Please reload page if it don't activate.
      </q-tooltip>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
.joystick {
  width: 120px;
  height: 120px;
  position: absolute;
}

.joystick__base {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  position: absolute;
}

.joystick__stick {
  width: 40%;
  height: 40%;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
}

</style>