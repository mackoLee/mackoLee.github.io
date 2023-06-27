<script setup lang="ts">
import {useQuasar} from "quasar";
import PinNumberModal from "@/components/PinNumberModal.vue";
import {ref} from "vue";

const $q = useQuasar();
const giveStamp = () => {
  $q.dialog({
    component: PinNumberModal,
  })
  .onOk((value) => {
    console.log("ok",value);
  })
}
const couponCount = ref(0);
</script>
<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">
        도장 수량을 입력해주세요.
      </div>
    </q-card-section>
    <q-card-section
      class="q-pt-none"
    >
      <q-input
        v-model="couponCount"
        label="도장 수량"
        type="number"
        :rules="[
          val => val > 0 || '1개 이상 입력해주세요.',
          val => val <= 10 || '10개 이하로 입력해주세요.'
        ]"
      />
    </q-card-section>
    <q-card-actions>
      <q-btn
        class="full-width"
        color="primary"
        label="도장 주기"
        @click="giveStamp"
      />
    </q-card-actions>
  </q-card>
</template>