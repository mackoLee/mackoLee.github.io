<script setup lang="ts">
import {ref} from 'vue'
import MainHeader from "@/components/layouts/MainHeader.vue";

import MainHeaderTestsTabs from "@/components/modules/MainHeaderTestsTabs.vue";
import MainFooter from "@/components/layouts/MainFooter.vue";

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)


</script>

<template>
  <q-layout view="hhh LpR fff">
    <main-header />

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
