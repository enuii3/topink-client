<script setup lang="ts">
// const gradientMessageColor14 = [ "#009900", "#00cc00", "#00ffa2", "#00ffff", "#1199bf", "#0080ff", "#0000ff", "#8800ff", "#ffaa00", "#ff8000", "#8b4513", "#ffcc00", "#ff5500", "#ff0000" ];
</script>

<template>
  <v-img src="topink-top.jpg">
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
