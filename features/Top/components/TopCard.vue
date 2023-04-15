<script setup lang="ts"></script>

<template>
  <div>
    <v-img src="topink.jpg">
      <strong class="top-message">『ミライへ繋げる、まちづくり。』</strong>
    </v-img>
  </div>
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
