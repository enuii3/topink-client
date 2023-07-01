<script setup lang="ts">
import HeaderMenu from "./HeaderMenu.vue";
</script>

<template>
  <v-app-bar app flat class="pa-6 pa-sm-4">
    <v-row no-gutters justify-sm="space-around">
      <v-col cols="12" sm="3" style="max-width: 220px">
        <div class="logo" @click="scrollTo()">
          <v-img src="topink-logo.png" max-width="40" aspect-ratio="16/9" />
          <h3 class="topink-logo-title">TOP INK</h3>
        </div>
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
.logo {
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
}
.topink-logo-title {
  padding-left: 10px;
}

.v-toolbar__content > * {
  margin-left: auto;
  margin-right: auto;
}
</style>
