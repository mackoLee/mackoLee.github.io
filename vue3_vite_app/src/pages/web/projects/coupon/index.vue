<script setup lang="ts">
import {computed, ComputedRef, Ref, ref} from "vue";
import ProjectsLayout from "@/layouts/ProjectsLayout.vue";
import CouponCard from "@/components/modules/projects/CouponCard.vue";
import UserSearchTable from "@/components/modules/projects/UserSearchTable.vue";
import MainModeCustomerLayout from "@/components/modules/projects/main-mode/MainModeCustomerLayout.vue";
import FullScreenBtn from "@/components/modules/projects/FullScreenBtn.vue";
import MainModeAdminLayout from "@/components/modules/projects/main-mode/MainModeAdminLayout.vue";
import SearchModeAdminLayout from "@/components/modules/projects/search-mode/SearchModeAdminLayout.vue";
import SearchModeCustomerLayout from "@/components/modules/projects/search-mode/SearchModeCustomerLayout.vue";
import GoPresentationBtn from "@/components/modules/projects/GoPresentationBtn.vue";

type Mode = "main-mode" | "user-search";
const mode:Ref<Mode> = ref("main-mode");
const modeLeftLayout: ComputedRef = computed( () => {
  switch (mode.value) {
    case "main-mode":
      return MainModeCustomerLayout;
    case "user-search":
      return SearchModeCustomerLayout;
  }
  return MainModeCustomerLayout;
})
const modeRightLayout: ComputedRef = computed(()=>{
  switch (mode.value){
    case "main-mode":
      return MainModeAdminLayout;
    case "user-search":
      return SearchModeAdminLayout;
  }
  return MainModeAdminLayout;
})
</script>
<template>
  <projects-layout>
    <q-page>
      <div class="row justify-center q-px-xl inherit-min-height bg-brown-2">
        <div class="absolute-top-right q-mr-md q-mt-md">
          <go-presentation-btn />
          <full-screen-btn />
        </div>
        <div
          class="col-6 q-my-auto row justify-center"
        >
          <component
            :is="modeLeftLayout"
          />
          <!--          <user-search-table />-->
          <coupon-card test />
        </div>
        <q-separator
          vertical
          class="absolute full-height"
        />
        <div class="col-6 q-my-auto row justify-center">
          <component
            :is="modeRightLayout"
          />
        </div>
      </div>
    </q-page>
  </projects-layout>
</template>

<style scoped>
.inherit-min-height{
  min-height: inherit;
}
</style>