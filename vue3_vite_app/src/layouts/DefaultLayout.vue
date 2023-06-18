<script setup lang="ts">
import {ref} from 'vue'
import MainHeader from "@/components/modules/main/MainHeader.vue";

import MainHeaderTestsTabs from "@/components/modules/tests/TestsNavTabs.vue";
import MainFooter from "@/components/modules/main/MainFooter.vue";

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)


</script>

<template>
  <q-layout view="hhh LpR fff">
    <main-header>
      <template #header-tabs>
        <slot name="header-tabs" />
      </template>
    </main-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <!-- drawer content -->
      <slot name="left-drawer" />
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      bordered
    >
      <!-- drawer content -->
      <slot name="right-drawer" />
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>

    <main-footer />
  </q-layout>
</template>
