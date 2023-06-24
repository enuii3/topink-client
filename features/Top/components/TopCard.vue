<script setup lang="ts">
// const gradientMessageColor14 = [ "#009900", "#00cc00", "#00ffa2", "#00ffff", "#1199bf", "#0080ff", "#0000ff", "#8800ff", "#ffaa00", "#ff8000", "#8b4513", "#ffcc00", "#ff5500", "#ff0000" ];
useHead({
  title: "株式会社TOP INK",
  meta: [
    {
      name: "description",
      content:
        "株式会社TOP INKは、お客様の暮らしを豊かにするために、常にお客様目線で考え、最高品質の商品とサービスを提供します。地球環境にも配慮し、社会貢献にも努め、持続可能な社会の実現に貢献します。",
    },
  ],
  // bodyAttrs: {
  //   class: "test",
  // },
  // script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <v-img src="topink-top.jpg" alt="株式会社TOP INK" aspect-ratio="16/9">
    <div class="top-message">
      <strong style="color: white"> 『 ミライへ繋げる、まちづくり。 』 </strong>
      <!-- <strong v-for="(str, i) in 'ミライへ繋げる、まちづくり。'" :style="{ color: gradientMessageColor14[i] }" >{{ str }}</strong > -->
    </div>
  </v-img>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .top-message {
    font-size: 20px;
  }
}

/* 601px以上の画面には16pxのフォントサイズを指定 */
@media screen and (min-width: 601px) {
  .top-message {
    font-size: 40px;
  }
}

.top-message {
  position: absolute;
  bottom: 20%;
  left: 4%;
}
</style>
