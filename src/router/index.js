import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/film" },
  /* -- 1. film--------------------------------------------------------------------------------------------------- */
  {
    path: "/film",
    component: () => import("@/views/Film"),
    children: [
      {
        path: "",
        redirect: "/film/nowplaying",
      },
      {
        path: "nowplaying",
        component: () => import("@/views/film/Nowplaying"),
      },
      {
        path: "comingsoon",
        component: () => import("@/views/film/Comingsoon"),
      },
    ],
  },
  /* --2 .center--------------------------------------------------------------------------------------------------- */
  { path: "/center", component: () => import("@/views/Center") },
  /* --3. cinema--------------------------------------------------------------------------------------------------- */
  { path: "/cinema", component: () => import("@/views/Cinema") },
  /* --4. detail详情页--------------------------------------------------------------------------------------------------- */
  { path: "/detail/:myid", component: () => import("@/views/Detail") },
  /* --5. 登录页--------------------------------------------------------------------------------------------------- */
  { path: "/login", component: () => import("@/views/Login") },
  /* -- 404页面--------------------------------------------------------------------------------------------------- */
  { path: "/:pathMatch(.*)", component: () => import("@/views/NotFound") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/* 守卫导航 */
router.beforeEach((to, from) => {
  const auth = ["/center", "/order", "/money", "/card"]; // 需要验证token的组件
  if (auth.includes(to.fullPath)) {
    console.log("验证token");
  }
  return;
});

export default router;
