<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  color: string;
  description: string;
  image?: string;
}

defineProps<Props>();
</script>

<template>
  <v-card
    class="business-card-outline"
    :style="{
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': color,
    }"
    height="228px"
  >
    <div class="py-4 px-4">
      <div class="business-card-title-bar">
        <v-icon class="pr-4" size="x-large" :color="color">{{ icon }}</v-icon>

        <h3
          style="letter-spacing: 2px"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="2000"
        >
          {{ title }}
        </h3>
      </div>

      <p
        data-aos="fade-in"
        data-aos-offset="300"
        data-aos-delay="300"
        data-aos-duration="3000"
      >
        {{ description }}
      </p>
    </div>

    <v-img class="business-img" src="topink-top.jpg" aspect-ratio="16/9" />
  </v-card>
</template>

<style lang="scss" scoped>
.v-img {
  width: 300px;
}

.business-card-outline {
  display: flex;
  justify-content: start;
  width: 100%;
  border-radius: 32px;
  z-index: 1;
  position: relative;
}
.business-card-title-bar {
  display: flex;
  align-items: center;
}

p {
  width: 500px;
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

@media screen and (max-width: 600px) {
  .v-img {
    width: 200px;
  }

  p {
    width: 280px;
    line-height: 20px;
  }
}

.business-img {
  position: absolute;

  bottom: 20px;
  right: 20px;
  opacity: 0.2;
}
</style>
