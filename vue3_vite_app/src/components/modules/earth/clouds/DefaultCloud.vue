<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps({
  top: {
    type: Number,
    default: 0
  },
  left: {
    type: Number,
    default: 0
  },
  rotate: {
    type: Number,
    default: 0
  }
})

const localTop = ref(props.top + Math.random() * 10)
const localLeft = ref(props.left + Math.random() * 100)
const localRotate = ref(props.rotate)


const speed = Math.random() * 1 + 1

const moveRight = () => {
  localLeft.value += speed
  if(localLeft.value > 1000){
    localLeft.value = -100
  }
}
onMounted(() => {
  setInterval(() => {
    moveRight()
  }, 100)
});



</script>
<template>
  <div
    class="default-cloud"
    :style="{
      top: localTop+'px',
      left: localLeft+'px',
      transform: `rotate(${rotate}deg)`,
    }"
  >
    <slot />
  </div>
</template>
<style lang="scss" scoped>
  .default-cloud{
    position: absolute;
    width: 100px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 20px 20px -10px #999999;
  }
</style>
