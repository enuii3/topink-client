<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
const props = defineProps<Props>();
</script>

<template>
  <TopInkCard title="私たちについて" :menu-index-number="menuIndexNumber">
  </TopInkCard>
</template>
