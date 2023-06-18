<script setup lang="ts">
import {ref} from "vue";
import {useCouponStore} from "@/stores/coupon";

const couponStore = useCouponStore();

const rows = couponStore.$state.userList;

const columns = [
  {
    name: "name",
    label: "Name",
    field: "name",
  },
  {
    name: "nickname",
    label: "Nickname",
    field: "nickname",
  },
  {
    name: "number_coupon",
    label: "Number of Coupons",
    field: "number_coupon",
  }
]

const filter = ref("");
</script>
<template>
  <q-table
    :rows="rows"
    :columns="columns"
    :filter="filter"
  >
    <template #top-right>
      <q-input
        v-model="filter"
        borderless
        dense
        debounce="300"
        placeholder="Search"
      >
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template #body-cell-number_coupon="props">
      <q-td class="text-right">
        {{ props.row.couponList.length }} 개
      </q-td>
    </template>
  </q-table>
</template>