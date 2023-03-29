<script setup lang="ts">
import EventEmitRecieveContetent from "@/components/modules/tests/_EventEmitRecieveContetent.vue";
import EventEmitButton from "@/components/modules/tests/_EventEmitButton.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

</script>
<template>
  <DefaultLayout>
    <h3>
      Event Bus Test
    </h3>
    <div>
      If you want to emit event, click the button.
      <event-emit-button />
    </div>
    <event-emit-recieve-contetent />
  </DefaultLayout>
</template>
