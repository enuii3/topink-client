<script setup lang="ts">
import HeaderMenu from "./HeaderMenu.vue";
import { colors } from "~/constants/constant";
</script>

<template>
  <v-app-bar flat height="80">
    <v-row no-gutters class="d-flex justify-space-around">
      <v-col xs="3" sm="2" md="1" class="d-flex align-center">
        <v-img src="topink.jpg" height="50" width="50" />

        <h1 v-for="(str, i) in 'Topink'" :key="i" :style="{ color: colors[i] }">
          {{ str }}
        </h1>
      </v-col>

      <v-col xs="7" sm="8" md="9" class="d-flex align-center">
        <HeaderMenu />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<style scoped>
header {
  width: 100%;
}
</style>
