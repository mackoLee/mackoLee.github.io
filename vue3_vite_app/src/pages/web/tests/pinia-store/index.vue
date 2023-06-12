<script lang="ts" setup>
import IncrementButton from "@/components/modules/tests/IncrementButton.vue";
import DecrementButton from "@/components/modules/tests/DecrementButton.vue";

import {useCounterStore} from "@/stores/counter";
import {computed} from "vue";
import TestsLayout from "@/layouts/TestsLayout.vue";

const counterStore = useCounterStore();

const count = computed(() => counterStore.count);
</script>
<template>
  <TestsLayout>
    <h3>
      Pinia Store Test
    </h3>
    counter state count: {{ count }}
    <increment-button />
    <decrement-button />
  </TestsLayout>
</template>