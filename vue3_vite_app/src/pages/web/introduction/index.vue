<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EarthSpace from "@/components/modules/introduce/EarthSpace.vue";
import SkySpace from "@/components/modules/introduce/SkySpace.vue";
import DefaultCloud from "@/components/modules/introduce/objects/clouds/DefaultCloud.vue";
import SeaSpace from "@/components/modules/introduce/SeaSpace.vue";
import DefaultShip from "@/components/modules/introduce/objects/ships/DefaultShip.vue";
import Me from "@/components/modules/introduce/objects/human/me.vue";
import MyJoyStick from "@/components/modules/introduce/MyJoyStick.vue";

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