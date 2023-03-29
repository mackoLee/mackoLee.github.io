<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {usePlugins} from "@/composibles/plugins";

const {router, route} = usePlugins();

console.log('hi');
window.router1 = router;
window.route2 = route;
</script>
<template>
  <DefaultLayout>
    하이
  </DefaultLayout>
</template>