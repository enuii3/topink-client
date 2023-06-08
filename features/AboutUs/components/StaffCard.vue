<script setup lang="ts">
import { Staff } from "~~/types/type";

interface Props {
  color: string;
  staff: Staff;
}

defineProps<Props>();
</script>

<template>
  <div class="outline pa-1 pa-sm-6" style="z-index: 1">
    <v-img
      class="staff-img"
      :src="staff.image"
      :alt="staff.name"
      aspect-ratio="16/9"
    />

    <div class="card-value">
      <div
        class="d-flex align-end"
        :style="{
          'border-bottom-width': '10px',
          'border-bottom-color': 'white',
        }"
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="2000"
      >
        <h1 class="name">{{ staff.name }}</h1>
        <h3 class="director job">{{ staff.directorJob }}</h3>
        <h3 class="director office">{{ staff.directorOffice }}</h3>
      </div>

      <div class="message-box pa-sm-4">
        <span
          class="message"
          data-aos="fade-in"
          data-aos-offset="300"
          data-aos-delay="300"
          data-aos-duration="3000"
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
  padding: 200px 10px 10px 10px;
}
.outline {
  position: relative;
  margin-top: 20px;
  border-radius: 8px;
  border: solid 10px white;
}

.staff-img {
  position: absolute;
  top: 20px;
  right: 20px;
  opacity: 0.3;
}

.director {
  margin-left: 20px;
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

  color: #373737;
}
.director {
  margin-left: 10px;
}

@media screen and (max-width: 600px) {
  .office {
    display: none;
  }
}
</style>
