<script lang="ts" setup>
import {useEmitter} from "@/plugins/mitt";

const emitter = useEmitter();

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