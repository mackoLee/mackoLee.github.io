<script lang="ts" setup>
import {Events, ref} from "vue";
import {EventType, Handler} from "mitt";
import {useEmitter} from "@/plugins/mitt";

const emitter = useEmitter();

const test = ref("");

const helloHandler: Handler<any> = (event: string) => {
  if (test.value === "Hello World") {
    test.value = "";
  } else {
    test.value = event;
  }
};
emitter.on("test", helloHandler);

</script>
<template>
  <q-card>
    <q-card-section>
      Received Message: {{ test }}
    </q-card-section>
    <q-card />
  </q-card>
</template>