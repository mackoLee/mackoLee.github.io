<script setup lang="ts">
import HeaderLink from "@/components/HeaderLink.vue";
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

        <header-link
          to="/web/introduction"
        >
          Introduction
        </header-link>

        <header-link
          to="/web/projects"
        >
          Projects
        </header-link>
        <header-link
          to="/web/tests"
        >
          Tests
        </header-link>
      </q-toolbar-title>
    </q-toolbar>

    <slot name="header-tabs" />
  </q-header>
</template>