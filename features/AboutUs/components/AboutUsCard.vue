<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";
import { Staff } from "~~/types/type";
import StaffCard from "./StaffCard.vue";

interface Props {
  headerMenu: HeaderMenu;
}

defineProps<Props>();

const staffList: Staff[] = [
  {
    name: "田島 憲人",
    image: "tajima-kento.jpg",
    directorJob: "代表取締役 ",
    directorOffice: "本社支店",
    message:
      "お客様の夢や目標を実現するために、最高品質の商品とサービスを提供することに全力を注いでいます。 私たちは常にお客様の声に耳を傾け、お客様のニーズや要望に真摯に向き合います。お客様の満足度を最優先に考え、信頼関係を築くことを大切にしています。私たちの仕事は単なるビジネスではなく、お客様とのパートナーシップを築きながら共に成長していくことです。 私たちは社会的責任も重要視しています。",
  },
  {
    name: "笹原 祐樹",
    image: "sasahara-yuki.jpg",
    directorJob: "取締役",
    directorOffice: "神奈川支店",
    message:
      "お客様の夢や目標を実現するために、最高品質の商品とサービスを提供することに全力を注いでいます。 私たちは常にお客様の声に耳を傾け、お客様のニーズや要望に真摯に向き合います。お客様の満足度を最優先に考え、信頼関係を築くことを大切にしています。私たちの仕事は単なるビジネスではなく、お客様とのパートナーシップを築きながら共に成長していくことです。 私たちは社会的責任も重要視しています。",
  },
];
</script>

<template>
  <TopInkCard
    position-bottom="-110px"
    bottom-title-width="320px"
    background-color="rgba(209, 220, 240)"
    paddingBottom="100px"
    :text="headerMenu.text"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <div v-for="(staff, index) in staffList" :key="index">
      <StaffCard :color="headerMenu.color" :staff="staff" />
    </div>
  </TopInkCard>
</template>

<style scoped></style>
