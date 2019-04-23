import VueRouter from "vue-router";
import home from "@/views/home";
import city from "@/views/city";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: home
  },
  {
    path: "/city",
    component: city
  }
];
const router = new VueRouter({ routes });
export default router;
