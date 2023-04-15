<script setup lang="ts">
import { Header } from "~~/features/Header";
import { Footer } from "~~/features/Footer";
</script>

<template>
  <v-app>
    <Header />
    <v-main class="vmain-container">
      <div class="vmain">
        <slot />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped>
.vmain-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vmain {
  max-width: 1200px;
}
</style>
