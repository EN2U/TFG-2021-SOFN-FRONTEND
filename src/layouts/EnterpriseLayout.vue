<template>
  <div class="column justify-center full-width">
    <q-toolbar class="flex-center bg-red-4 ">
      <div
        v-for="link in links"
        :key="link.title"
        class="q-px-xl"
      >
        <EssentialLink
          round
          class="q-px-xl text-h6 "
          v-bind="link"
        />
      </div>
    </q-toolbar>
    <q-tabs align="center">
      <q-route-tab
        class="text-blue"
        to="/open-shop"
        label="Back to the main page..."
      />
    </q-tabs>
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
    to: "/enterprise/dashboard"
  },
  {
    title: "Products",
    to: "/enterprise/products"
  },
  {
    title: "Profile",
    to: "/enterprise/profile"
  }
]

export default {
  name: "Enterprise",
  components: { EssentialLink },
  data () {
    return {
      links: links,
      back: {
        title: "Back to the main page...",
        to: "/open-shop"
      }
    }
  }
}

</script>
