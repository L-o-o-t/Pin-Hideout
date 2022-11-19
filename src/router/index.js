import { Vue } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import VueMeta from "vue-meta";
import IndexView from "../views/IndexView.vue";
import LoginView from "../views/LoginView.vue";
import SingleView from "../views/SingleView.vue";
import NewProductView from "../views/NewProductView.vue";

Vue.use(VueMeta);
// export default router;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/single",
      name: "single",
      component: SingleView,
    },
    {
      path: "/new-product",
      name: "new-product",
      component: NewProductView,
    },
  ],
});

export default router;
