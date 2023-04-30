<script setup lang="ts">
import { Header } from "~~/features/Header";
import { Footer } from "~~/features/Footer";
</script>

<template>
  <v-app>
    <Header />
    <v-main class="vmain">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
.vmain {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
@media screen and (max-width: 600px) {
  .vmain {
    margin-top: 40px;
  }
}
</style>
