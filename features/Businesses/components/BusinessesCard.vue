<script setup lang="ts">
import { TopInkCard, TopInkItemCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";

interface Props {
  headerMenu: HeaderMenu;
}

defineProps<Props>();

const businesses = [
  {
    icon: "mdi-home",
    title: "リフォーム事業",
    description:
      "お客様のご要望に合わせたプランをご提案し、お客様が理想とする住まいを実現するお手伝いをしています。住宅のリフォームは、お客様のライフスタイルやライフイベントに合わせて変化していくものです。",
    image: "topink-top.jpg",
  },
  {
    icon: "mdi-wall",
    title: "補償サービス事業",
    description:
      "製品やサービスの質に自信を持っており、万が一のトラブルや不具合に対しても迅速かつ適切に対応致します。補償サービスにより、お客様は安心して製品をご利用いただけます。",
    image: "topink-top.jpg",
  },
  {
    icon: "mdi-compost",
    title: "省エネ・住宅設備事業",
    description:
      "環境に配慮した省エネルギーソリューションを提供し、お客様の暮らしを快適かつ持続可能なものに致します。エネルギー効率の高い設備の導入や断熱材の施工など、さまざまな取り組みを通じて、住宅の省エネ化を実現しています。",
    image: "topink-top.jpg",
  },
  {
    icon: "mdi-poll",
    title: "SNSマーケティング",
    description:
      "Facebook、Instagram、Twitter、LinkedInなどの主要なソーシャルメディアプラットフォームを活用して、クライアントのビジネスの知名度を高め、ブランドを強化し、収益を増やすことをサポートします。",
    image: "topink-top.jpg",
  },
  {
    icon: "mdi-movie-filter",
    title: "動画プロモーション事業",
    description:
      "映像制作に特化したプロフェッショナルチームを擁しており、企業のブランディングや商品の販促に最適な動画を制作しています。 企画・撮影・編集までの全ての工程を一貫して自社で行うことで高品質かつスピーディーに対応します。",
    image: "topink-top.jpg",
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
            :icon="business.icon"
            :title="business.title"
            :description="business.description"
            :image="business.image"
            :color="headerMenu.color"
          />
        </div>
      </v-col>
    </v-row>
  </TopInkCard>
</template>
