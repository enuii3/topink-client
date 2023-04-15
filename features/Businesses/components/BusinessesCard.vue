<script setup lang="ts">
import { TopInkTitle } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
const props = defineProps<Props>();

const businesses = [
  {
    title: "リフォーム事業",
    description:
      "弊社では、住宅のリフォームを行っております。お客様のご要望に合わせたプランをご提案し、理想の住まいを実現いたします。",
  },
  {
    title: "オール浄水事業",
    description:
      "水道水を安心・安全なお水に変えるオール浄水器の販売・施工を行っております。品質にこだわった商品を取り揃え、安心してお使いいただけます。",
  },
  {
    title: "太陽光事業",
    description:
      "太陽光発電システムの販売・施工を行っております。高効率のパネルを使用し、低コストでの発電を実現いたします。",
  },
  {
    title: "蓄電池事業",
    description:
      "太陽光発電システムに併せて蓄電池の販売・施工を行っております。余った電力を貯蔵し、家庭用電化製品に利用することができます。",
  },
  {
    title: "外壁浄水",
    description:
      "外壁を浄水し、美観を保つ施工を行っております。環境にやさしい浄水剤を使用し、長期的に美しい外観を維持いただけます。",
  },
];
</script>

<template>
  <div class="pt-10">
    <div class="px-10 pb-4">
      <TopInkTitle variant="main" :menu-index-number="menuIndexNumber"
        >事業内容
      </TopInkTitle>
    </div>

    <v-row justify="space-around" no-gutters>
      <v-col cols="11" sm="5" v-for="(business, i) in businesses" :key="i">
        <!-- <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          > -->
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <v-card class="d-flex justify-center w-100 my-2" height="200px">
            <div class="ma-8">
              <h3 class="mb-2">{{ business.title }}</h3>
              <p>{{ business.description }}</p>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
