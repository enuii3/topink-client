<script setup lang="ts">
import { colors } from "~~/constants/constant";
import TopInkTitle from "./TopInkTitle.vue";

interface Props {
  title: string;
  menuIndexNumber: number;
}
const props = defineProps<Props>();
</script>

<template>
  <div
    class="ma-10 pa-10"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="200"
    data-aos-duration="2000"
    :style="{
      'border-radius': '20px',
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': colors[menuIndexNumber],
    }"
  >
    <TopInkTitle variant="main" :menu-index-number="menuIndexNumber">
      {{ title }}
    </TopInkTitle>
    <slot />
  </div>
</template>
