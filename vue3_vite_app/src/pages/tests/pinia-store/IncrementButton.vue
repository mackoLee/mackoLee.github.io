<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter.js";

const counterStore = useCounterStore();
</script>
<template>
  <q-btn
    color="primary"
    @click="counterStore.increment"
  >
    Increment!
  </q-btn>
</template>