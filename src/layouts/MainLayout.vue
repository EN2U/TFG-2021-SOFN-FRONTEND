<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="flex bg-red-5"
      elevated
      style="height: 65px"
    >
      <q-toolbar>
        <q-toolbar-title>
          {{ $t("proyectTitle") }}
        </q-toolbar-title>
        <EssentialLink
          v-for="link in linksNavbar"
          :key="link.title"
          v-bind="link"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="!($route.path.indexOf('/enterprise/') > -1 && !($route.path.indexOf('/enterprise/register') > -1))"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      :mini-width="55"
      mini-to-overlay
      :width="255"
      :breakpoint="500"
      content-class="bg-red-5"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        />
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

const linksNavbar = [
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
]
const linksData = [
  {
    title: "Empresa",
    caption: "Abrir mi tienda",
    to: "/open-shop",
    icon: "business"
  },
  {
    title: "Nombre de la empresa",
    caption: "Acceda a su perfil de empresa",
    icon: "perm_identity",
    to: "/enterprise/dashboard"
  },
  {
    title: "Buscador",
    caption: "xd",
    icon: "search",
    to: "search"
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
      linksNavbar: linksNavbar
    }
  }
}

</script>
