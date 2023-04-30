<script setup lang="ts">
interface Props {
  width?: string;
  color: string;
}
defineProps<Props>();
</script>

<template>
  <div class="d-flex align-center" :style="{ width: width }">
    <v-icon icon="mdi-chevron-down" :color="color" />
    <slot />
  </div>
</template>
