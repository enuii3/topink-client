<script setup lang="ts">
import { TopInkTitle } from "~/features/Elements";
import { headerMenu } from "~/constants/constant";

const topHeaderMenu = headerMenu.slice(0, 3);
const bottomHeaderMenu = headerMenu.slice(-3);
</script>

<template>
  <v-row no-gutter class="d-flex justify-space-around">
    <v-col
      cols="10"
      sm="5"
      class="d-flex justify-space-between"
      style="padding: 0"
    >
      <TopInkTitle
        v-for="(menu, i) in topHeaderMenu"
        :key="i"
        class="d-flex"
        :menu-index-number="i"
        variant="header"
      >
        {{ menu.text }}
      </TopInkTitle>
    </v-col>

    <v-col
      cols="10"
      sm="5"
      class="d-flex justify-space-between"
      style="padding: 0"
    >
      <TopInkTitle
        :menu-index-number="i + 3"
        variant="header"
        v-for="(menu, i) in bottomHeaderMenu"
        :key="i"
      >
        {{ menu.text }}
      </TopInkTitle>
    </v-col>
  </v-row>
</template>
