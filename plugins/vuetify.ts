// 参考文献 https://qiita.com/mml/items/9936471c551ee3f15218
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives, // primaryの参考文献 https://vuetifyjs.com/en/styles/colors/
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
