<script setup lang="ts">
const route = useRoute();

console.log(useUrlUtil().queryToObject(route.hash.substring(1)));
</script>
<template>
  <div>
    {{ useRoute() }}
    {{ $route }}
  </div>
</template>