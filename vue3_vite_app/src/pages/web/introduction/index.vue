<script setup lang="ts">

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import EarthSpace from "@/components/modules/earth/EarthSpace.vue";
import SkySpace from "@/components/modules/earth/SkySpace.vue";
import DefaultCloud from "@/components/modules/earth/clouds/DefaultCloud.vue";
import SeaSpace from "@/components/modules/earth/SeaSpace.vue";
</script>
<template>
  <default-layout>
    <q-page>
      <earth-space>
        <sky-space>
          <default-cloud />
          <default-cloud />
        </sky-space>
        <sea-space />
      </earth-space>
    </q-page>
  </default-layout>
</template>

<style lang="scss" scoped>




.blue-sea-object{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.blue-sea {
  position: absolute;
  bottom: -100%;
  left: -100%;
  background-color: #0000ff;
  border-radius: 100%;
  width: 300%;
  height: 200%;
}

.wave{
  position: absolute;
  bottom: 50%;
  left: 0;
}
</style>