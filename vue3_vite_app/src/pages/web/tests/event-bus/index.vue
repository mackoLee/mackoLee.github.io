<script setup lang="ts">
import EventEmitRecieveContetent from "@/components/modules/tests/EventEmitRecieveContetent.vue";
import EventEmitButton from "@/components/modules/tests/EventEmitButton.vue";
import MainHeaderTestsTabs from "@/components/modules/tests/TestsNavTabs.vue";
import TestsLayout from "@/layouts/TestsLayout.vue";

</script>
<template>
  <tests-layout>
    <q-page>
      <h3>
        Event Bus Test
      </h3>
      <div>
        If you want to emit event, click the button.
        <event-emit-button />
      </div>
      <event-emit-recieve-contetent />
    </q-page>
  </tests-layout>
</template>
