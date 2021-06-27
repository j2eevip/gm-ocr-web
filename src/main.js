import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import "@/assets/scss/index.scss";

import loadElementPlus from "@/core/lazy_use";
// use components
import loadComponents from "@/core/use";
// globalProperties
import globalProperties from "@/core/globalProperties";

import("@/icons");
// import '@/permission' // permission control

import directive from "@/core/directive";
import router from "@/router";
import store from "@/store";

const app = createApp(App);

loadElementPlus(app);
loadComponents(app);
globalProperties(app);

Object.keys(directive).forEach((key) => {
  directive[key].install(app);
});

// element-plus config
app.config.globalProperties.$ELEMENT = { size: "small", zIndex: 3000 };

app.use(router).use(store).mount("#app");
