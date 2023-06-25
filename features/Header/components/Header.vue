<script setup lang="ts">
import HeaderMenu from "./HeaderMenu.vue";
</script>

<template>
  <v-app-bar flat class="pa-6 pa-sm-4">
    <v-row no-gutters justify-sm="space-around">
      <v-col
        cols="12"
        sm="3"
        class="d-flex justify-start align-center"
        style="max-width: 220px"
      >
        <v-img src="topink-logo.png" max-width="40" aspect-ratio="16/9" />
        <h3 class="topink-logo-title">TOP INK</h3>
      </v-col>

      <v-col cols="12" sm="9" class="d-flex justify-start px-4 px-sm-0">
        <HeaderMenu />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped>
header {
  width: 100%;
}
.topink-logo-title {
  padding-left: 10px;
}

.v-toolbar__content > * {
  margin-left: auto;
  margin-right: auto;
}
</style>
