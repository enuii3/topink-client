<script setup lang="ts">
import { TopCard } from "~/features/Top";
import { MissionCard } from "~/features/Mission";
import { BusinessesCard } from "~/features/Businesses";
import { OfficeCard } from "~/features/Office";
import { AboutUsCard } from "~/features/AboutUs";
import { RecruitCard } from "~/features/Recruit";
import { ContactCard } from "~/features/Contact";
import { headerMenus } from "~~/constants/constant";

const componentCards = [
  MissionCard,
  BusinessesCard,
  AboutUsCard,
  OfficeCard,
  RecruitCard,
  ContactCard,
];
</script>

<template>
  <div>
    <TopCard />

    <div v-for="(card, index) in componentCards" class="py-2">
      <component :key="index" :is="card" :header-menu="headerMenus[index]" />
    </div>
  </div>
</template>
