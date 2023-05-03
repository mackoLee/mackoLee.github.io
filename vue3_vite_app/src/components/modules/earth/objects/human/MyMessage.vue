<script lang="ts" setup>
import { ref} from "vue";
import {usePlugins} from "@/composibles/plugins";

const { emitter } = usePlugins();

const mouseOver = ref(false);
emitter.on('mouseoverMe', () => {
  mouseOver.value = true;
})
emitter.on('mouseoutMe', () => {
  mouseOver.value = false;
})

</script>

<template>
  <q-chat-message
    class="absolute message"
    :text="[mouseOver?'안녕하세요! 물음표를 느낌표로 바꾸며 성장하는 개발자 이윤건입니다.':'  ...']"
    bg-color="amber-7"
    ω
  />
</template>
<style lang="scss" scoped>
.message{
  bottom: 50px;
  left: 50px;
  width: 200px;
  z-index: 3;
}

.transform-x{
  transform: translateX(-1);
}
</style>