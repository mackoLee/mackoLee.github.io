<script setup lang="ts">
import {useGlobalPressedArrowKeys} from "@/composibles/keyboard";
import {computed, onMounted, onUnmounted} from "vue";
import {useShipStore} from "@/stores/ship";
import {usePlugins} from "@/composibles/plugins";

const {emitter} = usePlugins();

const shipStore = useShipStore();

const {isUp, isDown, isLeft, isRight} = useGlobalPressedArrowKeys();

const width = 150;

const location = computed(() => shipStore.location)
const angle = computed(() => shipStore.movement.angle)

let moveIntervalIdx = -1;
onMounted(() =>{
    moveIntervalIdx = setInterval(() => {
        shipStore.move();
    }, 100)
});

const onAccelerate = () => {
    if(isUp.value && isRight.value){
        shipStore.accelerate(Math.PI*7/4);
    }
    else if(isRight.value && isDown.value){
        shipStore.accelerate(Math.PI/4);
    }
    else if(isDown.value && isLeft.value){
        shipStore.accelerate(Math.PI*3/4);
    }
    else if(isLeft.value && isUp.value){
        shipStore.accelerate(Math.PI*5/4);
    }
    else if(isUp.value) {
        shipStore.accelerate(Math.PI*3/2);
    }
    else if(isRight.value) {
        shipStore.accelerate(0);
    }
    else if(isDown.value) {
        shipStore.accelerate(Math.PI/2);
    }
    else if(isLeft.value) {
        shipStore.accelerate(Math.PI);
    }
}
let AccelerateIntervalIdx = -1;
onMounted(() => {
    AccelerateIntervalIdx = setInterval(onAccelerate, 100);
})

onUnmounted(() => {
    clearInterval(AccelerateIntervalIdx)
});

const aheadLeft = computed(() => {
    return Math.PI/2<= angle.value || angle.value <= -Math.PI/2
});

const zoom = computed(() => {
    return (0.5 + location.value.y/100);
})



</script>
<template>
  <div
    class="ship-wrap"
    :style="{
      left: location.x + '%',
      top: location.y + '%',
      width: width + 'px',
      transform: `scale(${zoom})`,

    }"
  >
    <slot name="ship-shape">
      <svg
        class="ship"
        viewBox="-10 0 110 30"
        :style="{
          transform: aheadLeft ? 'scaleX(-1)' : 'scaleX(1)'
        }"
        @mouseover="emitter.emit('mouseoverMe')"
        @mouseout="emitter.emit('mouseoutMe')"
      >
        <g class="ship-motor">
          <rect
            x="-10"
            y="0"
            width="15"
            height="15"
            fill="#000"
          />
        </g>
        <g class="ship-body">
          <path
            d="M 0 10 L 0 30 L 75 30 L 100 0 Z"
            fill="#fff"
            stroke="black"
          />
        </g>
      </svg>
    </slot>
    <div
      class="ship-inner"
      :style="{
        right: aheadLeft ? '15%': 'auto',
        left: aheadLeft? 'auto': '15%',
      }"
    >
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ship-wrap {
  position: absolute;
  z-index: 1;
  transition: all 0.2s;

}

.ship {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 2;
}

.ship-inner {
  position: absolute;
  bottom: 0;
  left: 15%;
  z-index: 1;
}
</style>