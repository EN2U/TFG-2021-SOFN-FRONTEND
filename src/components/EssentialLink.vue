<template>
  <q-item
    clickable
    tag="a"
    class="text-white"
    :active-class="title === 'Cerrar sesión' ? '' : 'text-black bg-yellow-14'"
    :to="to"
    @click="test"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ title }}
      </q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ""
    },

    to: {
      type: String,
      default: ""
    },

    icon: {
      type: String,
      default: ""
    },
    clear: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    test () {
      if (this.clear) {
        this.$store.dispatch("User/resetStore")
        this.$q.notify({
          message: "Cerrando sesión...",
          type: "positive",
          position: "top"
        })
        console.log("clear")
      }
    }
  }
}
</script>
