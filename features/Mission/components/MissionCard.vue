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
    text="あなたの人生を、もっと彩る。"
    bottom-title-width="310px"
    position-bottom="-50px"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <div class="message-outline">
      <p class="message pa-5 pa-sm-9 pa-md-12 pa-lg-16">
        私たちは、お客様の暮らしを豊かにするために、常にお客様目線で考え、最高品質の商品とサービスを提供します。<br />地球環境にも配慮し、社会貢献にも努め、持続可能な社会の実現に貢献します。<br />私たちの事業を通じて、お客様と地域社会の発展に貢献することを使命としています。
      </p>
    </div>
  </TopInkCard>
</template>

<style lang="scss" scoped>
.message-outline {
  display: flex;
  justify-content: center;

  & p {
    line-height: 4;
  }
}

@media screen and (max-width: 600px) {
  .message-outline {
    & p {
      line-height: 20px;
    }
  }
}

.message {
  font-family: "YuGothic";
  font-style: normal;
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;

  color: #373737;
}
</style>
