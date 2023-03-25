<script setup lang="ts">
import EventEmitRecieveContetent from "@/components/tests/_EventEmitRecieveContetent.vue";
import EventEmitButton from "@/components/tests/_EventEmitButton.vue";
</script>
<template>
  <h3>
    Event Bus Test
  </h3>
  <div>
    If you want to emit event, click the button.
    <event-emit-button />
  </div>
  <event-emit-recieve-contetent />
</template>
