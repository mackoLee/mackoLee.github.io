<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => {
  return colorMode.value === 'dark'
})
const defaultIcon = ref(isDark.value ? 'line-md:sunny-outline-to-moon-alt-loop-transition' : 'line-md:moon-alt-to-sunny-outline-loop-transition');
watch(isDark, (value)=>{
  if(value){
    defaultIcon.value = ''
    nextTick().then(()=>{
      defaultIcon.value ='line-md:sunny-outline-to-moon-alt-loop-transition';
    })
  }
  else{
    defaultIcon.value = ''
    nextTick().then(()=>{
      defaultIcon.value='line-md:moon-alt-to-sunny-outline-loop-transition';
    })
  }
})

const onClick = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <HeaderButtonLayoutAsRound
    :icon-name="defaultIcon"
    @click="onClick"
  />
</template>