<script setup lang="ts">
import {
  HeaderMenu,
  HeaderMenuText,
  HeaderMenuTitle,
  TopInkCardIcon,
  TopInkColor,
} from "~~/types/type";

interface Props extends HeaderMenu {
  title: HeaderMenuTitle;
  text: HeaderMenuText;
  icon: TopInkCardIcon;
  color: TopInkColor;
  positionRight?: string;
  positionBottom?: string;
  bottomTitleWidth: string;
  bottomTitleOpacity?: string;
  backgroundColor?: string;
  paddingBottom?: string;
}

withDefaults(defineProps<Props>(), {
  paddingBottom: "48px",
});
</script>

<template>
  <!-- <div :id="title" class="ma-5" data-aos="fade-in" data-aos-offset="200" data-aos-delay="200" data-aos-duration="2000" style="position: static" > -->
  <div
    :style="{
      background: backgroundColor,
      'padding-top': '48px',
      'padding-bottom': paddingBottom,
    }"
  >
    <div style="position: relative">
      <div :id="title" class="mx-5 mx-sm-7 h-100">
        <div class="title-bar">
          <img class="prepend-icon" :src="icon" :alt="title" />
          <h2 class="title">
            {{ text }}
          </h2>
        </div>
        <slot />
      </div>

      <div
        class="background-text"
        :style="{
          color: color,
          width: bottomTitleWidth,
          position: 'absolute',
          bottom: positionBottom,
          right: 0,
          opacity: bottomTitleOpacity,
        }"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.prepend-icon {
  margin-right: 10px;
  width: 40px;
  height: 40px;
}

.title {
  font-family: "YuGothic";
}

@media screen and (max-width: 600px) {
  .title {
    max-width: 200px;
  }
}

.background-text {
  z-index: auto;
  overflow: hidden;
  font-family: "Impact";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 122px;
  display: flex;
  align-items: center;
  text-transform: capitalize;

  mix-blend-mode: darken;
}
</style>
