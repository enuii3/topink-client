// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "株式会社TOP INK",
    },
  },
  imports: {
    dirs: ["features"],
  },
  build: {
    transpile: ["vuetify"],
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  css: ["assets/main.scss"],
});
