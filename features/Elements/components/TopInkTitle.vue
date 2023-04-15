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
      class="pl-4"
      :style="{
        'border-bottom-width': '10px',
        'border-bottom-style': 'solid',
        'border-color': colors[menuIndexNumber],
      }"
    >
      <slot />
    </h1>

    <strong
      v-else-if="variant === 'header'"
      :style="{ color: colors[menuIndexNumber] }"
    >
      <slot />
    </strong>
  </div>
</template>
