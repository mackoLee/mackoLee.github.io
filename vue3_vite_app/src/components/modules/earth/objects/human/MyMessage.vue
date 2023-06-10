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
    :text="[mouseOver?'안녕하세요. 알고리즘에 특화된 개발자 이윤건 입니다. 개발자를 준비하면서 시작한 알고리즘을 계속 풀며, 백준에서는 700문제가 넘는 문제를 해결하여 상위 2000등 대를 프로그래머스에서는 419문제를 풀어 100등 이내의 순위를 유지하고 있습니다. Python, C++, Java 그리고 Javascript 등 언어를 가리지 않고 풀며, 프로그래밍 언어에 넓은 지식을 가지고 있습니다.<br/><br/>'+
      '알고리즘 문제와 실제 개발의 상관관계는 레이싱게임과 실제 운전 능력이라고 생각하고 있습니다. 게임을 통해 많은 문제를 겪고 해결하는 과정을 겪었기에 실제 운전을 배우는데 더욱 빠르게 습득할수 있다고 자신합니다.<br/><br/>'+
      '뿐만아니라 실무에서 배운 시행착오, 반면교사, 좋은코드를 보면서 회사에서 필요한 인재로 거듭나고 있습니다.<br/><br/>'+
      '감사합니다.':'  ...']"
    text-html
    bg-color="amber-7"
  />
</template>
<style lang="scss" scoped>
.message{
  bottom: 50px;
  left: 50px;
  width: 400px;
  z-index: 3;
}

.transform-x{
  transform: translateX(-1);
}
</style>