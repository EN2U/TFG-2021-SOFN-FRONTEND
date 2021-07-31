
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/Index.vue")
      },
      {
        path: "/login",
        name: "login",
        component: () => import("src/pages/Login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () => import("src/pages/Register.vue")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("src/pages/About.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
]

export default routes
