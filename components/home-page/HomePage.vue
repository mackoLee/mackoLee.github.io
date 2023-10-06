<script setup lang="ts">
const {loadRows} = useIntroduceApi("googleSheet")

const googleApiStore = useGoogleApiStore();

watch(()=>googleApiStore.gapiInited, (value)=>{
  if(value){
    loadRows()
  }
})
async function init(){
  await googleApiStore.loadAll();
  await googleApiStore.loadGapi();
  if(googleApiStore.clientId){
    await googleApiStore.loadGis();
  }
}

onMounted(init);


// const sheets = google.sheets({
//   version: 'v4',
//   auth: googleApiStore.apiKey
// })

// console.log(sheets)


</script>
<template>
  <HomePageLayout />
</template>