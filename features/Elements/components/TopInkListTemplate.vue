<script setup lang="ts">
interface Props {
  list: { label: string; value: string }[];
  color: string;
}

defineProps<Props>();
</script>

<template>
  <v-row
    v-for="(obj, index) in list"
    :key="index"
    class="d-flex align-center"
    data-aos="fade-in"
    data-aos-offset="200"
    data-aos-delay="200"
    data-aos-duration="2000"
  >
    <v-col cols="4" class="d-flex justify-center"
      ><v-chip label :color="color" style="width: 100px">
        <p style="margin: 0 auto">
          {{ obj.label }}
        </p>
      </v-chip></v-col
    >
    <v-col cols="8">
      <div>{{ obj.value }}</div></v-col
    >
  </v-row>
</template>
