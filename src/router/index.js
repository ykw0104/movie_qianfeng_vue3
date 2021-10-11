import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/film", component: () => import("@/views/Film") },
  { path: "/center", component: () => import("@/views/Center") },
  { path: "/cinema", component: () => import("@/views/Cinema") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
