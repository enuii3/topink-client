// 参考文献 https://qiita.com/mml/items/9936471c551ee3f15218
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives, // primaryの参考文献 https://vuetifyjs.com/en/styles/colors/
    icons: {
      defaultSet: "mdi",
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
