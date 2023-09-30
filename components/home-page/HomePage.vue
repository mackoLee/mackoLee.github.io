<script setup lang="ts">
const {loadRows} = useIntroduceApi("googleSheet")

const googleApiStore = useGoogleApiStore();

const localGoogleApiKey = computed({
  get: () => googleApiStore.apiKey,
  set: (value) => googleApiStore.setGoogleApiKey(value),
})

const saveGoogleApiKey = () => {
  googleApiStore.updateGoogleApiKey(localGoogleApiKey.value)
}

onMounted(() => {
  loadRows()
      .then((res) => {
        console.log(res)
      })

  googleApiStore.loadGoogleApiKey()
})
</script>
<template>
  <HomePageLayout />
</template>