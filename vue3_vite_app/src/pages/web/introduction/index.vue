<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EarthSpace from "@/components/modules/introduce/EarthSpace.vue";
import SkySpace from "@/components/modules/introduce/SkySpace.vue";
import DefaultCloud from "@/components/modules/introduce/objects/clouds/DefaultCloud.vue";
import SeaSpace from "@/components/modules/introduce/SeaSpace.vue";
import DefaultShip from "@/components/modules/introduce/objects/ships/DefaultShip.vue";
import Me from "@/components/modules/introduce/objects/human/me.vue";
import MyJoyStick from "@/components/modules/introduce/MyJoyStick.vue";
import Keyboard from "@/components/Keyboard.vue";
import MyKeyboard from "@/components/modules/introduce/MyKeyboard.vue";
import {onMounted, onUnmounted} from "vue";


const func = function(event: any) {
  event.preventDefault(); // 기본 컨텍스트 메뉴 표시 방지
}

onMounted(() => {

  document.addEventListener('contextmenu', func);
});

onUnmounted(() => {
  document.removeEventListener('contextmenu', func);
});
</script>
<template>
  <default-layout>
    <q-page>
      <earth-space>
        <sky-space>
          <default-cloud
            v-for="i in 10"
          />
        </sky-space>
        <sea-space>
          <default-ship>
            <me />
          </default-ship>
        </sea-space>
      </earth-space>
      <my-joy-stick />
      <my-keyboard />
    </q-page>
  </default-layout>
</template>

<style lang="scss" scoped>
</style>