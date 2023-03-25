
<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import {usePlugins} from "@/composibles/plugins";
import {onMounted} from "vue";

const {router} = usePlugins();

onMounted(()=>router.push("/web/tests/i18n"))


</script>
<template>
  <div />
</template>
