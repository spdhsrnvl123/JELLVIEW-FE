import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/StartPage.vue'

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: HomeView,
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/Home.vue"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/MyPage.vue"),
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
