
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
        path: "user/profile",
        name: "user profile",
        component: () => import("src/pages/UserProfile")
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
        path: "bedca",
        name: "bedca",
        component: () => import("src/pages/Bedca.vue")
      },
      {
        path: "shop-search",
        name: "shop-search",
        component: () => import("src/pages/ShopSearch.vue")
      },
      {
        path: "enterprise/register",
        name: "enterprise-register",
        component: () => import("src/pages/Enterprise/EnterpriseRegister.vue")
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
            name: "enterprise profile",
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
        path: "search",
        name: "search",
        component: () => import("src/pages/ProductSearch.vue")
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
