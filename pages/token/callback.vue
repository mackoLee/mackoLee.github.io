<script setup lang="ts">

function hashToObject(hash: string) {
  return _chain(_mapValues(_split(hash, '&'), (v:any) => _split(v, '=')))
      .keyBy(0)
      .mapValues(1)
      .value();
}

const route = useRoute();

console.log(hashToObject(route.hash.substring(1)));
</script>
<template>
  <div>
    {{ useRoute() }}
    {{ $route }}
  </div>
</template>