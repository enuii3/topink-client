<script setup lang="ts">
import { TopInkTitle } from "~~/features/Elements";

interface Props {
  menuIndexNumber: number;
}
defineProps<Props>();
</script>

<template>
  <div>
    <div class="ma-10 pa-10 border">
      <TopInkTitle variant="main" :menu-index-number="menuIndexNumber">
        お問い合せ
      </TopInkTitle>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
