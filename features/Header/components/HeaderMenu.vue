<script setup lang="ts">
import { NavBarMenuTextTitle } from "~/features/Elements";
import { headerMenus } from "~/constants/constant";

const topHeaderMenus = headerMenus.slice(0, 3);
const bottomHeaderMenus = headerMenus.slice(-3);

const scrollTo = (index: number) => {
  window.scrollTo({
    top: 500 * (index + 1),
    behavior: "smooth",
  });
};
</script>

<template>
  <v-row no-gutter class="d-flex justify-center align-center navbar-menu">
    <v-col
      cols="12"
      sm="6"
      class="d-flex justify-space-between justify-sm-space-around align-center my-1"
      style="padding: 0"
    >
      <NavBarMenuTextTitle
        v-for="(menu, index) in topHeaderMenus"
        width="84px"
        :key="index"
        :color="menu.color"
        @click="scrollTo(index)"
      >
        <p class="navbar-menu-title">{{ menu.text }}</p>
      </NavBarMenuTextTitle>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      class="d-flex justify-space-between justify-sm-space-around align-center my-1"
      style="padding: 0"
    >
      <NavBarMenuTextTitle
        v-for="(menu, index) in bottomHeaderMenus"
        width="84px"
        :key="index"
        :color="menu.color"
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
