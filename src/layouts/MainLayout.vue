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
    title: "Login",
    to: "login"
  },
  {
    title: "Register",
    to: "register"
  }
]
const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    to: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    to: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    to: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    to: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    to: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    to: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    to: "https://awesome.quasar.dev"
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
