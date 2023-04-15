<script setup lang="ts">
import HeaderMenu from "./HeaderMenu.vue";
import { colors } from "~/constants/constant";
</script>

<template>
  <v-app-bar flat>
    <v-row no-gutters class="d-flex justify-space-around pt-6">
      <v-col cols="4" sm="3" md="2" class="d-flex align-center">
        <v-img src="topink.jpg" max-height="40" />

        <h2 v-for="(str, i) in 'Topink'" :key="i" :style="{ color: colors[i] }">
          {{ str }}
        </h2>
      </v-col>

      <v-col cols="6" sm="7" md="8" class="d-flex align-center">
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
