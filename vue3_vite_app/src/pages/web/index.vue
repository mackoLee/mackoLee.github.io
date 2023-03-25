<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { useEmitter} from "@/plugins/mitt";

const emitter = useEmitter();

emitter.on("test", (data) => {
  console.log(data);
});
</script>
<template>
  <HelloWorld msg="Vite + Vue" />
</template>