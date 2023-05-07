<script setup lang="ts">
import { TopInkCard, TopInkItemCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";

interface Props {
  headerMenu: HeaderMenu;
}

defineProps<Props>();

const recruitList = [
  {
    icon: "mdi-home",
    title: "リフォーム部門",
    description:
      "リフォーム事業は、住宅・店舗・オフィスなど、あらゆる建築物のリフォームを手がけています。当社では、一人ひとりがスキルアップできるよう、研修制度や資格取得支援など、さまざまな研修制度を用意しています。",
  },
  {
    icon: "mdi-poll",
    title: "SNSマーケティング部門",
    description:
      " SNSマーケティング事業では、主にクライアントのSNSアカウントを運用し、フォロワーの増加やブランド認知度の向上を目指し、クライアントのニーズに合わせた戦略の立案や、コンテンツの企画・制作、分析など、幅広い業務をお任せします。",
  },
  {
    icon: "mdi-movie-filter",
    title: "動画制作部門",
    description:
      "動画制作事業では、主にクライアントのプロモーションビデオや社内向け教育用動画など、様々な動画コンテンツの制作を手がけています。採用された方には、企画から撮影・編集までの一連の業務を担当していただきます。",
  },
];
</script>

<template>
  <TopInkCard
    position-bottom="-60px"
    bottom-title-width="300px"
    background-color="rgba(252, 154, 154)"
    :text="headerMenu.text"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <v-row class="mt-4" justify="space-between" no-gutters>
      <v-col
        v-for="(recruit, index) in recruitList"
        :key="index"
        cols="12"
        md="6"
      >
        <div
          class="pa-2"
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <TopInkItemCard
            :icon="recruit.icon"
            :title="recruit.title"
            :description="recruit.description"
            :color="headerMenu.color"
          />
        </div>
      </v-col>
    </v-row>
  </TopInkCard>
</template>

<style scoped>
.recruit-card {
  margin-top: 10px;
  padding: 20px;
  z-index: 1;
}
</style>
