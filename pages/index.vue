<script setup lang="ts">
import PagesHomePageButtonOfGoTutorial from "~/components/pages/home-page/button/PagesHomePageButtonOfGoTutorial.vue";

const {loadRows} = useIntroduceApi("googleSheet")

const googleApiStore = useGoogleApiStore();

async function init(){
  await googleApiStore.loadAll();
}

onMounted(init);

definePageMeta({
  layout: 'default-header-footer',
})
</script>
<template>
  <div
    class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
  >
    <div class="py-24 sm:py-32 max-w-[700px]">
      <PagesHomePageTextTitle />
      <PagesHomePageTextDescription />
      <div class="mt-12">
        <PagesHomePageButtonOfGoTutorial />
      </div>
    </div>
  </div>
</template>