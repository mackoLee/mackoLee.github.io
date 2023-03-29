<script setup lang="ts">
import MLink from "@/components/MLink.vue";
import MainHeaderTestsTabs from "@/components/modules/MainHeaderTestsTabs.vue";
</script>
<template>
  <!--text align center and middle-->
  <q-header
    class="bg-white text-black border-bottom"
  >
    <q-toolbar>
      <q-toolbar-title class="row items-center">
        <q-avatar
          square
        >
          <q-img
            src="@/assets/logo.png"
            class="q-mr-xs"
          />
        </q-avatar>

        <m-link
          to="/web/introduction"
        >
          Introduction
        </m-link>
        <m-link
          to="/web/tests"
        >
          Tests
        </m-link>
      </q-toolbar-title>
    </q-toolbar>

    <main-header-tests-tabs
      v-if="$route.path.startsWith('/web/tests')"
    />
  </q-header>
</template>