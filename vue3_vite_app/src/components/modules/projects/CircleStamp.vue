<script lang="ts" setup>

const props = defineProps({
  stamped: {
    type: Boolean,
    default: false
  }
})

</script>
<template>
  <div
    v-if="stamped"
    class="stamped-circle"
  >
    <svg
      class="stamped-circle-svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
    >
      <circle
        cx="100"
        cy="100"
        r="100"
        fill="#e00512"
      />
      <text
        x="50%"
        y="55%"
        text-anchor="middle"
        alignment-baseline="middle"
        font-size="100"
        font-family="Arial"
        fill="#FFFFFF"
      >
        😃
      </text>
    </svg>
  </div>
  <div
    v-else
    class="rounded-circle"
  />
</template>
<style scoped>

.rounded-circle {
  padding-top: 100%;
  background-color: #ccc;
}

.stamped-circle {
  position: relative;
  width: 100%;
  padding-top: 100%;

  .stamped-circle-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }
}


</style>