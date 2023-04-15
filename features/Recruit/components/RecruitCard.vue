<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
const props = defineProps<Props>();
</script>

<template>
  <TopInkCard title=" 採用情報 " :menu-index-number="menuIndexNumber">
  </TopInkCard>
</template>
<style scoped></style>
