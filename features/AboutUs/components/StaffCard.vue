<script setup lang="ts">
import { Staff } from "~~/types/type";

interface Props {
  color: string;
  staff: Staff;
  index: number;
}

defineProps<Props>();
</script>

<template>
  <div class="outline pa-3 pa-sm-6" style="z-index: 1">
    <!-- <div class="img-layout"> -->
    <v-img
      class="staff-img"
      :src="staff.image"
      :alt="staff.name"
      width="300"
      height="300"
      style="opacity: 0.8"
      :data-aos="fadeImage(index + 1)"
      data-aos-offset="100"
      data-aos-delay="100"
      data-aos-duration="1000"
    />
    <!-- </div> -->

    <div class="card-value">
      <div
        class="d-flex align-end"
        :style="{
          'border-bottom-width': '10px',
          'border-bottom-color': 'white',
        }"
        :data-aos="fadeString(index + 1)"
        data-aos-offset="150"
        data-aos-delay="150"
        data-aos-duration="1500"
      >
        <h1 class="name">{{ staff.name }}</h1>
        <h2 class="director job">{{ staff.directorJob }}</h2>
        <h3 class="director office">{{ staff.directorOffice }}</h3>
      </div>

      <div class="message-box pa-sm-4">
        <span
          class="message"
          :data-aos="fadeString(index + 1)"
          data-aos-offset="160"
          data-aos-delay="160"
          data-aos-duration="1600"
          >{{ staff.message }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-img {
  width: 200px;
}

.card-value {
  padding: 10px 0;
}
.outline {
  position: relative;
  margin-top: 20px;
  border-radius: 8px;
  border: solid 10px white;
}

.staff-img {
  display: flex;
  justify-content: center;
  opacity: 0.7;
}

.director {
  margin-left: 15px;
}

.message-box {
  z-index: 1;
}

.message {
  letter-spacing: 2px;
  line-height: 30px;
  font-family: "YuGothic";
  font-style: normal;
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.director {
  margin-left: 10px;
}

@media screen and (max-width: 600px) {
  .office {
    display: none;
  }
}

@media screen and (min-width: 601px) {
  .staff-img {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .card-value {
    padding-top: 200px;
  }
}
</style>
