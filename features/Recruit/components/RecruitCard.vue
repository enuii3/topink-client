<script setup lang="ts">
import { TopInkTitle } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
const props = defineProps<Props>();
</script>

<template>
  <div>
    <!-- <div class="pt-10"> -->
    <div class="ma-10 pa-10 border">
      <TopInkTitle variant="main" :menu-index-number="menuIndexNumber">
        採用情報
      </TopInkTitle>
    </div>
  </div>
</template>
