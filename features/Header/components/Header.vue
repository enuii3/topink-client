<script setup lang="ts">
import HeaderMenu from "./HeaderMenu.vue";
import { colors } from "~/constants/constant";
</script>

<template>
  <v-app-bar flat height="80">
    <div class="d-flex justify-space-between">
      <div class="d-flex align-center">
        <v-img src="topink.jpg" height="50" width="50" />

        <h1 v-for="(str, i) in 'Topink'" :key="i" :style="{ color: colors[i] }">
          {{ str }}
        </h1>
      </div>

      <div>
        <HeaderMenu />
      </div>
    </div>

    <!-- <template v-slot:append>
      <v-btn>
        <v-icon> mdi-cart </v-icon>
      </v-btn>
    </template> -->
  </v-app-bar>
</template>

<style scoped>
header {
  width: 100%;
}
</style>
