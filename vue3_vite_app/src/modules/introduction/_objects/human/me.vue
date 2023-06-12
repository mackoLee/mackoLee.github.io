<script lang="ts" setup>
import MyMessage from "@/modules/introduction/_objects/human/MyMessage.vue";
import {ref} from "vue";
import {useEmitter} from "@/plugins/mitt";
const emitter = useEmitter();

const mouseOver = ref(false);
emitter.on('mouseoverMe', () => {
  mouseOver.value = true;
})
emitter.on('mouseoutMe', () => {
  mouseOver.value = false;
})
</script>
<template>
  <div
    @mouseover="emitter.emit('mouseoverMe')"
    @mouseleave="emitter.emit('mouseoutMe')"
  >
    <i
      class="fas fa-child me"
      :class="{
        hover: mouseOver
      }"
    />
    <my-message />
  </div>
</template>
<style lang="scss" scoped>
  .me{
    bottom: 0;
    left: 0;
    z-index: 3;

    &:before{
      content: "\f1ae";
      font-size:5rem;
      //animation: change-color 2s infinite;
    }

    &.hover{
      &:before{
        content: "\e59d";
        color: #fff;
        animation: none;
      }
    }
  }

  //@keyframes change-color {
  //  0% {
  //    color: #fff;
  //  }
  //  50% {
  //    color: #000;
  //  }
  //  100% {
  //    color: #fff;
  //  }
  //}

</style>