
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
        path: "user/login",
        name: "login",
        component: () => import("src/pages/Login.vue")
      },
      {
        path: "user/register",
        name: "register",
        component: () => import("src/pages/Register.vue")
      },
      {
        path: "about",
        name: "about",
        component: () => import("src/pages/About.vue")
      },
      {
        path: "open-shop",
        name: "open-shop",
        component: () => import("src/pages/OpenShop.vue")
      },
      {
        path: "enterprise",
        name: "enterprise",
        component: () => import("layouts/EnterpriseLayout.vue"),
        children: [
          {
            path: "dashboard",
            name: "dashboard",
            component: () => import("src/pages/Enterprise/EnterpriseDashboard.vue")
          },
          {
            path: "profile",
            name: "profile",
            component: () => import("src/pages/Enterprise/EnterpriseProfile.vue")
          },
          {
            path: "products",
            name: "products",
            component: () => import("src/pages/Enterprise/EnterpriseProducts.vue")
          },
          {
            path: "products/new",
            name: "new",
            component: () => import("src/pages/Enterprise/EnterpriseNewProduct.vue")
          }
        ]
      },
      {
        path: "enterprise/register",
        name: "enterprise-register",
        component: () => import("src/pages/Enterprise/EnterpriseRegister.vue")
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
