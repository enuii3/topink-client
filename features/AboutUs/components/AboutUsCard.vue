<script setup lang="ts">
import { TopInkTitle } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
const props = defineProps<Props>();

const aboutUs = [
  {
    title: "郵便番号",
    value: "430-0855",
  },
  {
    title: "住所",
    value: "静岡県 浜松市 南区 楊子町 199-4 Leylandy village D号室",
  },
];
</script>

<template>
  <div class="pt-10">
    <div class="ma-10 pa-10 border">
      <TopInkTitle variant="main" :menu-index-number="menuIndexNumber">
        会社概要
      </TopInkTitle>
      <v-list>
        <v-list-item v-for="(us, i) in aboutUs" :key="i">
          {{ us.title }}: {{ us.value }}
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
