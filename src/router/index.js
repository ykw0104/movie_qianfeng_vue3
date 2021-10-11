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
  /* --4. 404页面--------------------------------------------------------------------------------------------------- */
  { path: "/:pathMatch(.*)", component: () => import("@/views/NotFound") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
