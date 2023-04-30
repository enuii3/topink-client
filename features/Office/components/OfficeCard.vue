<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";

interface Props {
  headerMenu: HeaderMenu;
}
defineProps<Props>();

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
  <!-- <TopInkCard id="office" :menu-index-number="menuIndexNumber" title="会社概要"> -->
  <TopInkCard
    bottom-title-width="220px"
    position-bottom="-50px"
    :text="headerMenu.text"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <v-list>
      <v-list-item
        v-for="(us, i) in aboutUs"
        :key="i"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="2000"
      >
        {{ us.title }}: {{ us.value }}
      </v-list-item>
    </v-list>
  </TopInkCard>
</template>
