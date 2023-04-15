<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
defineProps<Props>();
</script>

<template>
  <TopInkCard title="お問い合わせ" :menu-index-number="menuIndexNumber">
  </TopInkCard>
</template>
<style scoped></style>
