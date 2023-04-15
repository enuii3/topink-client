<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
const props = defineProps<Props>();
</script>

<template>
  <TopInkCard title="お知らせ" :menu-index-number="menuIndexNumber">
  </TopInkCard>
</template>
