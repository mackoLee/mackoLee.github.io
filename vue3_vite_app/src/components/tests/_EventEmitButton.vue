<script lang="ts" setup>
import { usePlugins } from "@/composibles/plugins";

const { emitter } = usePlugins();

const onClick=()=>{
  emitter.emit("test", "Hello World");
}
</script>
<template>
  <q-card>
    <q-card-section>
      <q-btn
        type="button"
        color="primary"
        @click="onClick"
      >
        Click!
      </q-btn>
    </q-card-section>
  </q-card>
</template>