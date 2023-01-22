import Home from "@/views/Home/Home.vue";
import Login from "@/views/Login/Login.vue";

import Register from "@/views/Register/Register.vue";
import User from "@/views/User/User.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/user",
      name: "User",
      component: User,
    },
  ],
});

export default router;
