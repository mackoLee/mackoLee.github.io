<script lang="ts" setup>
import {Ref, ref} from "vue";
import CircleStamp from "@/components/modules/projects/CircleStamp.vue";

const props = defineProps({
  test:{
    type: Boolean,
    default: false
  }
})

const localValue: Ref<number> = ref(0);

</script>
<template>
  <q-card
    class="coupon-card"
  >
    <q-card-section>
      <div class="row full-width">
        <div class="col-auto left-coupon-header">
          <span class="text-h5">
            Coupon
          </span>
        </div>
        <div class="col" />
        <div
          v-if="test"
          class="col-auto right-coupon-header"
        >
          <q-btn
            outline
            @click="localValue++"
          >
            +
          </q-btn>
          <span class="q-ml-sm" />
          <q-btn
            outline
            @click="localValue = localValue > 0 ? localValue - 1 : 0"
          >
            -
          </q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row q-gutter-md">
        <div
          v-for="i in 5"
          class="col"
        >
          <circle-stamp
            :stamped="i <= localValue"
          />
        </div>
      </div>
      <q-space class="q-mt-md" />
      <div class="row q-gutter-md">
        <div
          v-for="i in 5"
          class="col"
        >
          <circle-stamp
            :stamped="i+5 <= localValue"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<style lang="scss" scoped>
.coupon-card{
  width: 400px;
}
</style>