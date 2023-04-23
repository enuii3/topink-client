<script setup lang="ts">
import { topInkColors } from "~/constants/constant";

interface Props {
  menuIndexNumber: number;
  width?: string;
}
defineProps<Props>();
</script>

<template>
  <div class="d-flex align-center" :style="{ width: width }">
    <v-icon icon="mdi-chevron-down" :color="topInkColors[menuIndexNumber]" />
    <slot />
  </div>
</template>
