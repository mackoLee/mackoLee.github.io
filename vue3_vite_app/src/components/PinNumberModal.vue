<script setup lang="ts">
import {ref, watch} from "vue";
import {useDialogPluginComponent} from "quasar";

const emit = defineEmits([...useDialogPluginComponent.emits])
const {dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent();

const pinNumber = ref("");

watch(pinNumber, (newVal) => {
  if (newVal.length === 6) {
    onDialogOK(newVal);
    pinNumber.value = "";
  }
})


</script>
<template>
  <q-dialog
    ref="dialogRef"
    @hide="onDialogHide"
  >
    <q-card>
      <q-card-section>
        <div class="text-h6">
          Pin 번호를 입력해주세요.
        </div>
      </q-card-section>
      <q-card-section
        class="q-pt-none text-center text-bold"
      >
        <span style="letter-spacing: 4px">
          {{ '*'.repeat(pinNumber.length) }}{{ '-'.repeat(6-pinNumber.length) }}
        </span>
      </q-card-section>
      <!-- 10개의 pin 번호 -->
      <q-card-section>
        <div
          class="row q-col-gutter-lg"
          style="width:250px;"
        >
          <div
            v-for="number in 9"
            :key="number"
            class="col-4"
          >
            <q-btn
              class="number-btn"
              color="primary"
              :label="number"
              @click="pinNumber += number"
            />
          </div>
          <div class="col-4">
            <q-btn
              class="number-btn"
              color="primary"
            >
              <q-icon name="" />
            </q-btn>
          </div>
          <div class="col-4">
            <q-btn
              class="number-btn col-4"
              color="primary"
              label="0"
              @click="pinNumber += '0'"
            />
          </div>
          <div class="col-4">
            <q-btn
              class="number-btn col-4"
              color="primary"
              @click="pinNumber = pinNumber.slice(0, -1)"
            >
              <q-icon name="backspace" />
            </q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<style scoped lang="scss">
.number-btn{
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
}
</style>