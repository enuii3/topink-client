<script setup lang="ts">
interface Props {
  list?: { label: string; value: string }[];
  color: string;
}

defineProps<Props>();
</script>

<template>
  <!-- <v-row
    v-for="(obj, index) in list"
    :key="index"
    class="d-flex"
    data-aos="fade-in"
    data-aos-offset="100"
    data-aos-delay="100"
    data-aos-duration="1000"
  > -->
  <v-row v-for="(obj, index) in list" :key="index" class="d-flex">
    <v-col cols="4" class="d-flex align-start justify-center">
      <div class="d-flex align-center" style="height: 56px">
        <v-chip label :color="color" style="width: 120px; height: 100%">
          <p style="margin: 0 auto">
            {{ obj.label }}
          </p>
        </v-chip>
      </div>
    </v-col>
    <v-col cols="8" class="d-flex align-center">
      <v-text-field
        prepend-icon="mdi-check"
        :label="obj.label"
        variant="outlined"
        :color="color"
        >{{ obj.value }}</v-text-field
      ></v-col
    >
  </v-row>
</template>

<style lang="scss" scoped></style>
