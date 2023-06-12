<script lang="ts" setup>
import IncrementButton from "@/components/modules/tests/_IncrementButton.vue";
import DecrementButton from "@/components/modules/tests/_DecrementButton.vue";

import {useCounterStore} from "@/stores/counter";
import {computed} from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MainHeaderTestsTabs from "@/components/modules/MainHeaderTestsTabs.vue";

const counterStore = useCounterStore();

const count = computed(() => counterStore.count);
</script>
<template>
  <DefaultLayout>
    <h3>
      Pinia Store Test
    </h3>
    counter state count: {{ count }}
    <increment-button />
    <decrement-button />
  </DefaultLayout>
</template>