<script lang="ts" setup>
import {useCounterStore} from "@/stores/counterStore";

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