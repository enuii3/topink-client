<script setup lang="ts">
import { headerMenus } from "~/constants/constant";

interface Props {
  maxWidth: string;
}

defineProps<Props>();
</script>

<template>
  <v-footer
    class="d-flex flex-column pa-8"
    style="width: 100%; min-height: 400px"
  >
    <div style="width: 100%; height: 100%" :style="{ 'max-width': maxWidth }">
      <v-row no-gutters justify="center" style="height: 100%">
        <v-col cols="6" class="d-flex justify-center align-center">
          <div class="footer-left-inline-box flex-grow-1">
            <v-img
              height="100"
              src="topink-new-logoy.png"
              alt="footer-logo"
              aspect-ratio="16/9"
            />

            <div
              class="d-flex flex-column justify-space-between"
              style="min-height: 50px"
            >
              <!-- <h4 class="d-flex justify-center">株式会社TOP INK</h4> -->
              <p class="copy-right">© TOP INK inc.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="6" class="d-flex justify-center">
          <div class="footer-right-inline-box">
            <div
              v-for="(menu, index) in headerMenus"
              :key="index"
              class="d-flex align-center"
            >
              <v-icon size="x-large" :color="menu.color"
                >mdi-chevron-down</v-icon
              >

              <p style="letter-spacing: 6px">
                {{ menu.text }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<style scoped>
footer {
  background-color: #a9a9a9;
  color: white;
}

.footer-left-inline-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 350px;
  min-height: 200px;
}

.footer-right-inline-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.copy-right {
  display: flex;
  justify-content: center;
  background-color: grey;
  font-size: 12px;
  margin-top: 10px;
}
</style>
