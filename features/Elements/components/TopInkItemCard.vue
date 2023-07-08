<script setup lang="ts">
interface Props {
  index: number;
  icon: string;
  title: string;
  color: string;
  description: string;
  image?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <v-card
    class="card-outline"
    :style="{
      'border-width': '2px',
      'border-style': 'solid',
      'border-color': color,
    }"
    height="228px"
    :data-aos="fadeCard(index + 1)"
    data-aos-offset="190"
    data-aos-delay="190"
    data-aos-duration="1900"
  >
    <div class="my-6 mx-8">
      <div class="card-title-bar">
        <v-icon class="pr-4" size="x-large" :color="color">{{ icon }}</v-icon>

        <h3
          style="letter-spacing: 2px"
          :data-aos="fadeString(index + 1)"
          data-aos-offset="320"
          data-aos-delay="320"
          data-aos-duration="3200"
        >
          {{ title }}
        </h3>
      </div>

      <p
        :data-aos="fadeString(index + 1)"
        data-aos-offset="350"
        data-aos-delay="350"
        data-aos-duration="3500"
      >
        {{ description }}
      </p>
    </div>

    <v-img
      v-if="image"
      class="business-img"
      :alt="title"
      :src="image"
      :data-aos="fadeImage(index + 1)"
      style="opacity: 0.4"
      aspect-ratio="16/9"
      data-aos-offset="400"
      data-aos-delay="400"
      data-aos-duration="4000"
    />
  </v-card>
</template>

<style lang="scss" scoped>
.v-img {
  width: 250px;
}

.card-outline {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 8px 0;
  border-radius: 32px;
  z-index: 1;
  position: relative;
}
.card-title-bar {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
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
}

@media screen and (max-width: 600px) {
  .v-img {
    width: 200px;
  }

  p {
    width: 280px;
    line-height: 20px;
    z-index: 1;
  }
}

.business-img {
  position: absolute;

  bottom: 20px;
  right: 20px;
}
</style>
