import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/film" },
  /* -- 1. film--------------------------------------------------------------------------------------------------- */
  {
    path: "/film",
    component: () => import(/* webpackChunkName: "kw-film" */ "@/views/Film"),
    children: [
      {
        path: "",
        redirect: "/film/nowplaying",
      },
      {
        path: "nowplaying",
        component: () =>
          import(/* webpackChunkName: "kw-film" */ "@/views/film/Nowplaying"),
      },
      {
        path: "comingsoon",
        component: () =>
          import(/* webpackChunkName: "kw-film" */ "@/views/film/Comingsoon"),
      },
    ],
  },
  /* --2 .center--------------------------------------------------------------------------------------------------- */
  {
    path: "/center",
    component: () =>
      import(/* webpackChunkName: "kw-center" */ "@/views/Center"),
  },
  /* --3. cinema--------------------------------------------------------------------------------------------------- */
  {
    path: "/cinema",
    component: () =>
      import(/* webpackChunkName: "kw-cinema" */ "@/views/Cinema"),
  },
  /* --4. detail详情页-------------------------------------------------------------------------------------------- */
  {
    path: "/detail/:myid",
    component: () =>
      import(/* webpackChunkName: "kw-detail" */ "@/views/Detail"),
  },
  /* --5. 登录页--------------------------------------------------------------------------------------------------- */
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "kw-login" */ "@/views/Login"),
  },
  /* --6. 城市列表-------------------------------------------------------------------------------------------------- */
  {
    path: "/city",
    component: () => import(/* webpackChunkName: "kw-city" */ "@/views/City"),
  },
  /* -- 404页面--------------------------------------------------------------------------------------------------- */
  {
    path: "/:pathMatch(.*)",
    component: () =>
      import(/* webpackChunkName: "kw-notfound" */ "@/views/NotFound"),
  },
];
``;

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/* 守卫导航 */
router.beforeEach((to, from) => {
  const auth = ["/center", "/order", "/money", "/card"]; // 需要验证token的组件
  if (auth.includes(to.fullPath)) {
    // console.log("验证token, 没有token返回登录页面");
  }
  return;
});

export default router;
