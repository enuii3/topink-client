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
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
});
