<script setup lang="ts">
import ProjectsLayout from "@/layouts/ProjectsLayout.vue";
import CouponCard from "@/components/modules/projects/CouponCard.vue";
import UserSearchTable from "@/components/modules/projects/UserSearchTable.vue";
</script>
<template>
  <projects-layout>
    <q-page>
      <q-space class="q-mt-xl" />
      <div class="row justify-center">
        <div class="col-auto">
          <coupon-card test />
        </div>
      </div>
      <q-space class="q-mt-xl" />
      <user-search-table />
    </q-page>
  </projects-layout>
</template>
