<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MainHeaderTestsTabs from "@/components/modules/MainHeaderTestsTabs.vue";
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()

onMounted(()=>router.push("/web/tests/event-bus"))
</script>
<template>
  <default-layout>
    <template #header-tabs>
      <main-header-tests-tabs />
    </template>
    <slot />
  </default-layout>
  {{ $route.path === '/web/tests' ? $router.push('/web/tests/event-bus') : ''
</template>
