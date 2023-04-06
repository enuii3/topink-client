<script setup lang="ts">
import { Header } from "~~/features/Header";
import { Footer } from "~~/features/Footer";
</script>

<template>
  <v-app>
    <Header />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
