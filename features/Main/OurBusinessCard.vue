<script setup lang="ts">
import { ourBusiness } from "~/constants/constant";
</script>

<template>
  <div class="pt-10">
    <h2 class="text-center my-10">事業内容</h2>
    <v-row justify="space-around" no-gutters>
      <v-col cols="11" sm="5" v-for="(business, i) in ourBusiness" :key="i">
        <!-- <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          > -->
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <v-card class="d-flex justify-center w-100 my-2" height="200px">
            <div class="ma-8">
              <h3 class="mb-2">{{ business.title }}</h3>
              <p>{{ business.description }}</p>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
