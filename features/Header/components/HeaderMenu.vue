<script setup lang="ts">
import { NavBarMenuTextTitle } from "~/features/Elements";
import { headerMenu } from "~/constants/constant";

const topHeaderMenu = headerMenu.slice(0, 3);
const bottomHeaderMenu = headerMenu.slice(-3);

const scrollTo = (index: number) => {
  window.scrollTo({
    top: 500 * index,
    behavior: "smooth",
  });
};
</script>

<template>
  <v-row no-gutter class="d-flex justify-center align-center navbar-menu">
    <v-col
      cols="12"
      sm="6"
      class="d-flex justify-space-between justify-sm-space-around align-center"
      style="padding: 0"
    >
      <NavBarMenuTextTitle
        v-for="(menu, index) in topHeaderMenu"
        width="84px"
        :key="index"
        :menu-index-number="index"
        @click="scrollTo(index)"
      >
        <p class="navbar-menu-title">{{ menu.text }}</p>
      </NavBarMenuTextTitle>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      class="d-flex justify-space-between justify-sm-space-around align-center"
      style="padding: 0"
    >
      <NavBarMenuTextTitle
        v-for="(menu, i) in bottomHeaderMenu"
        width="84px"
        :menu-index-number="i + 3"
        :key="i"
        @click="scrollTo(index)"
      >
        <p class="navbar-menu-title">{{ menu.text }}</p>
      </NavBarMenuTextTitle>
    </v-col>
  </v-row>
</template>

<style scoped>
.navbar-menu-title {
  font-size: 12px;
}

@media screen and (max-width: 600px) {
  .navbar-menu {
    margin-top: 4px;
  }
}
</style>
