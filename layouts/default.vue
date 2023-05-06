<script setup lang="ts">
import { Header } from "~~/features/Header";
import { Footer } from "~~/features/Footer";

const headerMaxWidth = "1500px";
const mainMaxWidth = "1200px";
</script>

<template>
  <v-app>
    <Header :max-width="headerMaxWidth" />
    <v-main class="vmain" :style="{ 'max-width': mainMaxWidth }">
      <slot />
    </v-main>
    <Footer :max-width="mainMaxWidth" />
  </v-app>
</template>

<style scoped>
.vmain {
  margin: 0 auto;
  width: 100%;
}
@media screen and (max-width: 600px) {
  .vmain {
    margin-top: 40px;
  }
}
</style>
