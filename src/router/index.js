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
    component: () => import(/* webpackChunkName: "user" */ "../views/Home.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/review",
    name: "Review",
    component: () => import("../views/Review.vue"),
  },
  {
    path: "/reviewlist",
    name: "ReviewList",
    component: () => import("../views/ReviewList.vue"),
  },
  {
    path: "/myreview",
    name: "MyReview",
    component: () => import("../views/MyReview.vue"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: () => import("../views/MyPage.vue"),
  },
  {
    path: "/auth/kakao/callback",
    name: "KakaoRedirect",
    component: () => import("../views/KakaoRedirect.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
