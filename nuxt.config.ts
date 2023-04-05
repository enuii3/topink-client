// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Top ink",
    },
  },
  imports: {
    dirs: ["features"],
  },
  // css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
});
