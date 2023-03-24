<script lang="ts" setup>
import IncrementButton from "@/pages/tests/pinia-store/IncrementButton.vue";
import DecrementButton from "@/pages/tests/pinia-store/DecrementButton.vue";

import {useCounterStore} from "@/stores/counter.js";
import {computed} from "vue";
const counterStore = useCounterStore();

const count = computed(() => counterStore.count);
</script>
<template>
  <h3>
    Pinia Store Test
  </h3>
  counter state count: {{ count }}
  <IncrementButton />
  <decrement-button />
</template>