<template>
  <q-btn
    color="primary"
    @click="goProjectPage"
  >
    <q-icon name="fa-solid fa-external-link-alt" />
    <span class="q-ml-sm">프로젝트</span>
  </q-btn>
</template>
<script setup lang="ts">
function goProjectPage() {
  window.open('https://stamp-note.github.io/nuxt/', '_blank')
}
</script>