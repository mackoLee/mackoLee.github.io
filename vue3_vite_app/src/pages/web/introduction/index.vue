<script setup lang="ts">

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EarthSpace from "@/components/modules/earth/EarthSpace.vue";
import SkySpace from "@/components/modules/earth/SkySpace.vue";
import DefaultCloud from "@/components/modules/earth/objects/clouds/DefaultCloud.vue";
import SeaSpace from "@/components/modules/earth/SeaSpace.vue";
import DefaultShip from "@/components/modules/earth/objects/ships/DefaultShip.vue";
import Me from "@/components/modules/earth/objects/human/me.vue";
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
    </q-page>
  </default-layout>
</template>

<style lang="scss" scoped>
</style>