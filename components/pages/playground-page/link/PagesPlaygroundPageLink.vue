<script setup lang="ts">
const to = useLocaleRoute()('/playground');
</script>
<template>
  <div>
    <slot
      :to="to"
    >
      <PagesPlaygroundPageLinkLayout
        :to="to"
      />
    </slot>
  </div>
</template>