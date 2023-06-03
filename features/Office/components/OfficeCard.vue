<script setup lang="ts">
import { TopInkCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";
import { TopInkListTemplate } from "../../Elements";

interface Props {
  headerMenu: HeaderMenu;
}
defineProps<Props>();

const offices = [
  { label: "会社名", value: "株式会社TOP INK" },
  { label: "代表取締役", value: "田島 憲人" },
  { label: "郵便番号", value: "430-0855" },
  {
    label: "本社",
    value: "静岡県 浜松市 南区 楊子町 199-4 Leylandy village D号室",
  },
  {
    label: "支店",
    value: "静岡県 浜松市 南区 楊子町 199-4 Leylandy village D号室",
  },
];
</script>

<template>
  <TopInkCard
    position-bottom="-50px"
    bottom-title-width="220px"
    bottom-title-opacity="0.2"
    :text="headerMenu.text"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <div class="py-5">
      <TopInkListTemplate :list="offices" :color="headerMenu.color" />
    </div>
  </TopInkCard>
</template>
