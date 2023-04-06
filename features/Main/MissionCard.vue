<script setup lang="ts">
import { mission } from "~/constants/constant";
</script>

<template>
  <div>
    <div class="ma-6 pa-6 border">
      <h2 class="text-center">経営理念</h2>
      <v-list>
        <v-list-item>{{ mission.value }} </v-list-item>
      </v-list>
    </div>
  </div>
</template>
