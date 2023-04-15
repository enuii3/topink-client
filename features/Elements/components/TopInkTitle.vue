<script setup lang="ts">
import { colors } from "~/constants/constant";

interface Props {
  menuIndexNumber: number;
  variant: "header" | "main";
}
defineProps<Props>();
</script>

<template>
  <div>
    <h1
      v-if="variant === 'main'"
      :style="{
        'padding-left': '15px',
        background: `linear-gradient(transparent 60%, ${colors[menuIndexNumber]} 40%)`,
      }"
    >
      <slot />
    </h1>

    <span
      v-else-if="variant === 'header'"
      :style="{
        color: colors[menuIndexNumber],
        'font-size': '12px',
        'font-weight': 'bold',
      }"
    >
      <slot />
    </span>
  </div>
</template>
