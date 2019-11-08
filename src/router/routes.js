const routes = [
  {
    path: "/",
    component: () => import("layouts/search.vue"),
    children: [
      { path: "", component: () => import("pages/Erik.vue") },
      { path: "/erik", component: () => import("pages/Erik.vue") },
      {
        path: "/search",
        name: "search",
        component: () => import("pages/search-profile.vue")
      },
      {
        path: "/profile/:id",
        name: "profile",
        component: () => import("pages/profile.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
