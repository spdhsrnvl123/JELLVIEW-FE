import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "StartPage",
    component: ()=> import("@/pages/StartPage.vue")
  },
  {
    path: "/home",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/detail/:id",
    name: "DetailPage",
    component: () => import("@/pages/DetailPage.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () => import("@/pages/RegisterPage.vue"),
  },
  {
    path: "/review",
    name: "ReviewPage",
    component: () => import("@/pages/ReviewPage.vue"),
  },
  {
    path: "/myreview",
    name: "MyReviewPage",
    component: () => import("@/pages/MyReviewPage.vue"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: () => import("@/pages/MyPage.vue"),
  },
  {
    path: "/auth/kakao/callback",
    name: "KakaoRedirect",
    component: () => import("@/pages/KakaoRedirect.vue"),
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
