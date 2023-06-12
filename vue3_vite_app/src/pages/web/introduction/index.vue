<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EarthSpace from "@/modules/introduction/_components/EarthSpace.vue";
import SkySpace from "@/modules/introduction/_components/SkySpace.vue";
import DefaultCloud from "@/modules/introduction/_objects/clouds/DefaultCloud.vue";
import SeaSpace from "@/modules/introduction/_components/SeaSpace.vue";
import DefaultShip from "@/modules/introduction/_objects/ships/DefaultShip.vue";
import Me from "@/modules/introduction/_objects/human/me.vue";
import MyJoyStick from "@/modules/introduction/_components/MyJoyStick.vue";

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
    </q-page>
  </default-layout>
</template>

<style lang="scss" scoped>
</style>