<script setup lang="ts">
import { TopCard } from "~/features/Top";
import { MissionCard } from "~/features/Mission";
import { BusinessesCard } from "~/features/Businesses";
import { OfficeCard } from "~/features/Office";
import { AboutUsCard } from "~/features/AboutUs";
import { RecruitCard } from "~/features/Recruit";
import { ContactCard } from "~/features/Contact";

const componentCards = [
  MissionCard,
  BusinessesCard,
  OfficeCard,
  AboutUsCard,
  RecruitCard,
  ContactCard,
];
</script>

<template>
  <div>
    <TopCard />
    <component
      v-for="(card, index) in componentCards"
      :key="index"
      :is="card"
      :menu-index-number="index"
    />
  </div>
</template>
