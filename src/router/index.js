import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/film" },
  { path: "/film", component: () => import("@/views/Film") },
  { path: "/center", component: () => import("@/views/Center") },
  { path: "/cinema", component: () => import("@/views/Cinema") },
  // 处理404
  { path: "/:pathMatch(.*)", component: () => import("@/views/NotFound") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
