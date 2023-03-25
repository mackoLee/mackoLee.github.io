<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import {usePlugins} from "@/composibles/plugins";

const {router,} = usePlugins();

router.push("/web/tests/i18n");

</script>
<template>
  <div />
</template>
