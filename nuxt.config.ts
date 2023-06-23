// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "TOP INK",
    },
  },
  imports: {
    dirs: ["features"],
  },
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
});
