<script setup lang="ts">
import { TopInkTitle } from "~~/features/Elements";

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
  <div>
    <div class="ma-6 pa-6 border">
      <TopInkTitle variant="main" :menu-index-number="menuIndexNumber">
        経営理念
      </TopInkTitle>
      <v-list>
        <v-list-item>{{ mission.value }} </v-list-item>
      </v-list>
    </div>
  </div>
</template>
