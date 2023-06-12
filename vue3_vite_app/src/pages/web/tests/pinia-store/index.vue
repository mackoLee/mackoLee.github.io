<script lang="ts" setup>
import IncrementButton from "@/modules/tests/pinia-store/_components/IncrementButton.vue";
import DecrementButton from "@/modules/tests/pinia-store/_components/DecrementButton.vue";

import {useCounterStore} from "@/stores/counterStore";
import {computed} from "vue";
import TestsLayout from "@/modules/tests/_layouts/TestsLayout.vue";

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