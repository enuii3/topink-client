<script setup lang="ts">
import { ourOffice } from "~/constants/constant";
</script>

<template>
  <div class="pt-10">
    <div class="ma-10 pa-10 border">
      <h2>会社概要</h2>
      <v-list>
        <v-list-item v-for="(office, i) in ourOffice" :key="i">
          {{ office.text }}: {{ office.value }}
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>
