<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
const props = defineProps<Props>();

const mission = {
  title: "経営理念",
  value:
    " 私たちは、お客様の暮らしを豊かにするために、常にお客様目線で考え、最高品質の商品とサービスを提供します。地球環境にも配慮し、社会貢献にも努め、持続可能な社会の実現に貢献します。私たちの事業を通じて、お客様と地域社会の発展に貢献することを使命としています。",
};
</script>

<template>
  <TopInkCard title="経営理念" :menu-index-number="menuIndexNumber">
    <v-list>
      <v-list-item
        data-aos="fade-in"
        data-aos-offset="400"
        data-aos-delay="400"
        data-aos-duration="4000"
        >{{ mission.value }}
      </v-list-item>
    </v-list>
  </TopInkCard>
</template>
<style scoped></style>
