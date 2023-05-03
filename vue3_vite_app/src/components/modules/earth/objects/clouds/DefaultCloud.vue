<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";

import {getRandomInteger} from "@/utils/custom_math";


import {useWindowSizeUtil} from "@/utils/screen";

const {getWidth} = useWindowSizeUtil();

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

const localTop = ref(0);
const randomizeLocalTop = () => {
    localTop.value = getRandomInteger(50, 100)
}
onMounted(() => {
    randomizeLocalTop()
})

const localWidth = ref(120);
const randomizeLocalWidth = () => {
    localWidth.value = getRandomInteger(120, 300)
}
onMounted(() => {
    randomizeLocalWidth()
})

const localHeight = ref(50);
const randomizeLocalHeight = () => {
    localHeight.value = getRandomInteger(localWidth.value/4, localWidth.value / 2);
}
onMounted(() => {
    randomizeLocalHeight()
})

const localX = ref(0)
const randomizeLocalX = () => {
    localX.value = getRandomInteger(-localWidth.value, getWidth() - 2);
}
onMounted(() => {
    randomizeLocalX()
})

const localSpeed = ref(10);
const randomLocalSpeed = () => {
    localSpeed.value = getRandomInteger(10, 50);
}
onMounted(() => {
    randomLocalSpeed()
});


const cloudStyle = ref({});

const setCloudStyleWithTransition = (top: Number, left: Number, width: Number, height: Number, rotate: Number, transition: String) => {
    cloudStyle.value = {
        ...cloudStyle.value,
        transition: transition,
    }
    setTimeout(() => {
        cloudStyle.value = {
            top: top + 'px',
            left: left + 'px',
            width: width + 'px',
            height: height + 'px',
            transform: `rotate(${rotate}deg)`,
            transition: transition
        }
    }, 1)
}
onMounted(() => {
    cloudStyle.value = {
        top: localTop.value + 'px',
        left: localX.value + 'px',
        width: localWidth.value + 'px',
        height: localHeight.value + 'px',
        transform: `rotate(${props.rotate}deg)`,
        transition: `none`
    }
});

const moveCloudToEnd = () => {
    setTimeout(() => {
        let movingTime = ((getWidth() - localX.value) + 1) / localSpeed.value;

        setCloudStyleWithTransition(
            localTop.value,
            getWidth(),
            localWidth.value,
            localHeight.value,
            props.rotate,
            `all ${movingTime}s linear`
        )
    },2);
}

const generateCloudFromStart = () => {
    randomizeLocalTop();
    randomizeLocalWidth();
    randomizeLocalHeight();
    localX.value = -localWidth.value;
    randomLocalSpeed();

    cloudStyle.value = {
        top: localTop.value + 'px',
        left: localX.value + 'px',
        width: localWidth.value + 'px',
        height: localHeight.value + 'px',
        transform: `rotate(${props.rotate}deg)`,
        transition: `none`
    }
}

onMounted(() => {
    moveCloudToEnd();
})

const onTransitionend = () =>{

    generateCloudFromStart();
    moveCloudToEnd();
}

</script>
<template>
  <div
    class="default-cloud"
    :style="cloudStyle"
    @transitionend="onTransitionend"
  >
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.default-cloud {
  position: absolute;
  background: rgba(255, 255, 255);
  width: 300px;
  height: 100px;
  border-radius: 150px;
  box-shadow: 10px 10px rgba(0,0,0,0.2);
  animation: move 3s infinite;
  opacity: 0.8;
  &:after{
    content: '';
    background: rgba(255, 255, 255);
    position: absolute;
    width: 33.33%;
    height: 100%;
    border-radius: 50%;
    top: -50%;
    left: 16.67%;
  }
  &:before{
    content: '';
    background: rgba(255, 255, 255);
    position: absolute;
    width: 56.67%;
    height: 150%;
    border-radius: 50%;
    top: -90%;
    right: 13.33%;
  }
}

@keyframes move {
  0% {
    transform: translatex(0);
  }
  50% {
    transform: translatex(-2px);
  }
}
</style>
