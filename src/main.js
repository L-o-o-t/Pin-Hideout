import { createApp, Vue } from "vue";
import VueMeta from "vue-meta";

import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
Vue.use(VueMeta);
app.mount("#app");
