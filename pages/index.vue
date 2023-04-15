<script setup lang="ts">
import { TopCard } from "~/features/Top";
import { MissionCard } from "~/features/Mission";
import { BusinessesCard } from "~/features/Businesses";
import { NewsCard } from "~/features/News";
import { AboutUsCard } from "~/features/AboutUs";
import { RecruitCard } from "~/features/Recruit";
import { ContactCard } from "~/features/Contact";

const componentCards = [
  MissionCard,
  BusinessesCard,
  NewsCard,
  AboutUsCard,
  RecruitCard,
  ContactCard,
];
</script>

<template>
  <div>
    <TopCard />
    <!-- <div v-for="(color, i) in colors" :key="i"> -->
    <component
      v-for="(card, i) in componentCards"
      :key="i"
      :is="card"
      :menu-index-number="i"
    />
    <!-- </div> -->
    <!-- <MissionCard />
    <BusinessesCard />
    <AboutUsCard /> -->
  </div>
</template>
