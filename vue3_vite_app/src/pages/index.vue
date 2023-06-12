
<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

import {onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

onMounted(()=>router.push("/web/introduction"))


</script>
<template>
  <div />
</template>
