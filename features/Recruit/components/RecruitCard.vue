<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";

interface Props {
  headerMenu: HeaderMenu;
}

defineProps<Props>();
</script>

<template>
  <TopInkCard
    position-bottom="-50px"
    bottom-title-width="300px"
    bottom-title-opacity="0.2"
    :text="headerMenu.text"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <div>採用情報</div>
  </TopInkCard>
</template>

<style scoped></style>
