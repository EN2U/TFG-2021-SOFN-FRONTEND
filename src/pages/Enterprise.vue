<template>
  <div class="q-pa-xl column justify-center full-width">
    <q-toolbar class="flex-center ">
      <div
        v-for="link in links"
        :key="link.title"
        class="q-px-xl"
      >
        <EssentialLink
          class="q-px-xl text-h4 bg-red-5"
          v-bind="link"
        />
      </div>
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>
  </div>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue"

const links = [
  {
    title: "Dashboard",
    to: "dashboard"
  },
  {
    title: "Products",
    to: "products"
  },
  {
    title: "Profile",
    to: "profile"
  }
]

export default {
  name: "Enterprise",
  components: { EssentialLink },
  data () {
    return {
      links: links
    }
  }
}

</script>
