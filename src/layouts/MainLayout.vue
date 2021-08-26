<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="flex bg-blue-grey-9"
      elevated
      style="height: 65px"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            @click="$router.push('/')"
            v-text="$t('proyectTitle')"
          />
        </q-toolbar-title>
        <div
          v-if="!userRoles"
          class="row"
        >
          <EssentialLink
            v-for="link in unregisteredLinksNavbar"
            :key="link.title"
            v-bind="link"
          />
        </div>
        <div
          v-else
          class="row"
        >
          <EssentialLink
            v-for="link in registeredLinksNavbar"
            :key="link.title"
            v-bind="link"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="userRoles && !($route.path.indexOf('/enterprise/') > -1 && !($route.path.indexOf('/enterprise/register') > -1))"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      :mini-width="55"
      mini-to-overlay
      :width="255"
      :breakpoint="500"
      content-class="bg-blue-grey-9"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8 overflow-hidden"
        >
          <router-link
            class="flex justify-center"
            to="/"
          >
            <q-img
              src="appIcons/SOFN.png"
              style="width:80%; cursor:pointer; height: 100px"
            />
          </router-link>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue"

const linksData = [
  {
    title: "FAQS",
    caption: "Como abrir mi tienda",
    to: "/open-shop",
    icon: "business"
  },
  {
    title: "Dashboard",
    caption: "Acceda a sus tiendas",
    icon: "perm_identity",
    to: "/enterprise/dashboard"
  },
  {
    title: "Buscador",
    caption: "Productos Open Food Facts",
    icon: "search",
    to: "/search"
  },
  {
    title: "Bedca",
    caption: "Productos de Bedca",
    to: "/bedca",
    icon: "food_bank"
  },
  {
    title: "Buscador de tiendas",
    icon: "storefront",
    to: "/shop-search"
  }
]

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data () {
    return {
      miniState: true,
      leftDrawerOpen: true,
      essentialLinks: linksData,
      unregisteredLinksNavbar: [
        {
          title: "About",
          to: "/about"
        },
        {
          title: "Login",
          to: "/user/login"
        },
        {
          title: "Register",
          to: "/user/register"
        }
      ],
      registeredLinksNavbar: [
        {
          title: "About",
          to: "/about"
        },
        {
          title: this.$store.getters["User/getEmail"] ? this.$store.getters["User/getEmail"] : "",
          to: "/user/profile"
        },
        {
          title: "Cerrar sesión",
          to: "/user/login",
          clear: true
        }
      ]
    }
  },
  computed: {
    userRoles () {
      return this.$store.getters["User/getRole"]
    }
  }
}

</script>
