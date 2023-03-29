<script lang="ts" setup>
import {useCounterStore} from "@/stores/counter";

const counterStore = useCounterStore();
</script>
<template>
  <q-btn
    color="primary"
    @click="counterStore.decrement"
  >
    Decrement!
  </q-btn>
</template>