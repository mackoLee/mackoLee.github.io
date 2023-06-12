<script setup lang="ts">
import EventEmitRecieveContetent from "@/modules/tests/event-bus/_components/EventEmitRecieveContetent.vue";
import EventEmitButton from "@/modules/tests/event-bus/_components/EventEmitButton.vue";
import TestsLayout from "@/modules/tests/_layouts/TestsLayout.vue";

</script>
<template>
  <TestsLayout>
    <h3>
      Event Bus Test
    </h3>
    <div>
      If you want to emit event, click the button.
      <event-emit-button />
    </div>
    <event-emit-recieve-contetent />
  </TestsLayout>
</template>
