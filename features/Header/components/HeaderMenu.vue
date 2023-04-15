<script setup lang="ts">
import { TopInkTitle } from "~/features/Elements";
import { headerMenu } from "~/constants/constant";
const topHeaderMenu = headerMenu.slice(0, 3);
const bottomHeaderMenu = headerMenu.slice(-3);
console.log("topHeaderMenu", topHeaderMenu);
console.log("bottomHeaderMenu", bottomHeaderMenu);
</script>

<template>
  <v-row no-gutters>
    <v-col cols="12" sm="6" class="d-flex">
      <div v-for="(title, i) in topHeaderMenu" :key="i">
        <TopInkTitle :menu-index-number="i" variant="header">
          {{ title }}
        </TopInkTitle>
      </div>
    </v-col>

    <v-col cols="12" sm="6" class="d-flex">
      <div v-for="(title, i) in bottomHeaderMenu" :key="i">
        <TopInkTitle :menu-index-number="i + 3" variant="header">
          {{ title }}
        </TopInkTitle>
      </div>
    </v-col>
  </v-row>
</template>
