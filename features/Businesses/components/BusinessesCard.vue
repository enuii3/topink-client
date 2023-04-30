<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";
import BusinessCard from "./BusinessCard.vue";

interface Props {
  headerMenu: HeaderMenu;
}

defineProps<Props>();

const businesses = [
  {
    icon: "mdi-home",
    title: "リフォーム事業",
    description:
      "私たちは、お客様のご要望に合わせたプランをご提案し、お客様が理想とする住まいを実現するお手伝いをしています。住宅のリフォームは、お客様のライフスタイルやライフイベントに合わせて変化していくものです。",
  },
  {
    icon: "mdi-wall",
    title: "外壁事業",
    description:
      "外壁は、建物の顔であり、建物を守る重要な要素の1つです。私たちは、お客様のご要望に合わせて、塗装色や素材を提案し、美しく長持ちする外壁を実現しています。",
  },
  {
    icon: "mdi-compost",
    title: "省エネ事業",
    description:
      "私たちは、地球環境に配慮しながら、お客様の省エネニーズに応えるために、LED照明や断熱材の取り付け、太陽光発電システムの設置などを提供しています。",
  },
  {
    icon: "mdi-poll",
    title: "SNSマーケティング",
    description:
      "私たちは、Facebook、Instagram、Twitter、LinkedInなどの主要なソーシャルメディアプラットフォームを活用して、クライアントのビジネスの知名度を高め、ブランドを強化し、収益を増やすことをサポートします。",
  },
  {
    icon: "mdi-movie-filter",
    title: "動画プロモーション事業",
    description:
      "当社は、映像制作に特化したプロフェッショナルチームを擁しており、企業のブランディングや商品の販促に最適な動画を制作しています。 企画・撮影・編集までの全ての工程を一貫して自社で行うことで高品質かつスピーディーに対応します。",
  },
];
</script>

<template>
  <TopInkCard
    bottom-title-width="360px"
    position-bottom="-60px"
    background-color="rgba(255,128,0,0.2)"
    :text="headerMenu.text"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <v-row class="mt-4" justify="space-between" no-gutters>
      <v-col
        v-for="(business, index) in businesses"
        :key="index"
        cols="12"
        md="5"
      >
        <div
          data-aos="fade-in"
          data-aos-offset="100"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <BusinessCard
            :icon="business.icon"
            :title="business.title"
            :description="business.description"
            :color="headerMenu.color"
          />
        </div>
      </v-col>
    </v-row>
  </TopInkCard>
</template>
