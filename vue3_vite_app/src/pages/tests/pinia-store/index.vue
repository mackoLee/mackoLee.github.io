<script lang="ts" setup>
import IncrementButton from "@/components/tests/_IncrementButton.vue";
import DecrementButton from "@/components/tests/_DecrementButton.vue";

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
  <increment-button />
  <decrement-button />
</template>