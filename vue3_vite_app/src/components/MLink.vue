<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  to: string | Object,
  label: string,
}>()

const to = computed(() => props.to);


</script>
<template>
  <router-link
    class="mk-link"
    :to="to"
  >
    {{ label }}<slot />
  </router-link>
</template>
<style lang="scss" scoped>
.mk-link {
  color: inherit;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  padding: 4px 16px;
  &:hover {
    color: rgba($dark, 0.5);
  }
}
</style>