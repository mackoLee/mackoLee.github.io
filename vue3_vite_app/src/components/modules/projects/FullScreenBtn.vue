<script setup lang="ts">

import {useQuasar} from "quasar";
const $q = useQuasar()

const toggle = (e: any) => {
  const target = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;

  $q.fullscreen.toggle(target)
      .then(() => {
        // success!
      })
      .catch((err) => {
        alert(err)
        // uh, oh, error!!
        // console.error(err)
      })
}
</script>

<template>
  <q-btn
    flat
    color="secondary"
    :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
    :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
    @click="toggle"
  />
</template>