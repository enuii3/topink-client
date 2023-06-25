<script setup lang="ts">
import { Header } from "~~/features/Header";
import { Footer } from "~~/features/Footer";

const headerMaxWidth = "1500px";
const mainMaxWidth = "1200px";
</script>

<template>
  <v-app :max-width="headerMaxWidth">
    <Header />
    <v-main class="vmain">
      <v-card :style="{ 'max-width': mainMaxWidth }">
        <slot />
      </v-card>
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
.vmain {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
}

@media screen and (max-width: 600px) {
  .vmain {
    width: 100vh;
  }
}
</style>
