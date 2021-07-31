<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      elevated
      style="height:55px"
    >
      <q-toolbar>
        <q-toolbar-title>
          Spanish Open Food Network
        </q-toolbar-title>
        <q-btn>{{ $t("signup") }}</q-btn>
        <q-btn>
          <EssentialLink
            :key="login.title"
            v-bind="login"
          />
        </q-btn>
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
      content-class="bg-primary text-white"
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

const login = {
  title: "login",
  link: "login"
}

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    link: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
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
      login: login
    }
  }
}
</script>
