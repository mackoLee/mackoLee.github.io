<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const goPresentation = () => {
  // 새창 띄우기
  window.open('https://docs.google.com/presentation/d/10VzjN6X-O7ntR9cr-bpjErelVCFsr5GvF_GnYg0VfB8/edit?usp=sharing', '_blank');
  // router.push('https://docs.google.com/presentation/d/10VzjN6X-O7ntR9cr-bpjErelVCFsr5GvF_GnYg0VfB8/edit?usp=sharing')


}
</script>
<template>
  <q-btn
    class="q-ma-sm"
    color="primary"
    outline
    @click="goPresentation"
  >
    <q-icon name="fa-solid fa-person-chalkboard" />
    <span class="q-ml-sm">기획</span>
  </q-btn>
</template>