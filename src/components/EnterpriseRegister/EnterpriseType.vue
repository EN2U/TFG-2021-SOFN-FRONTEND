<template>
  <div class="column flex items-center">
    <div class="flex column">
      <div class="q-mb-md text-center">
        <span class="text-h4 text-bold">Para finalizar su registro</span>
      </div>
      <div class="q-mb-md text-center">
        <span class="text-subtitle1">¿Es un productor?</span>
      </div>
    </div>
    <div class="row full-width justify-around">
      <q-btn
        :color="productor ? 'grey-5' : 'grey-3'"
        style="min-width: 200px; min-height: 200px; width: 45%"
        @click="setColor(true)"
      >
        <div class="fit column justify-center items-center">
          <q-icon
            name="agriculture"
            size="xl"
            :color="productor ? 'secondary' : 'black'"
          />
          <span
            class="text-h6"
            :class="productor ? 'text-bold text-secondary' : 'text-black'"
          >Soy un Productor</span>
        </div>
      </q-btn>
      <q-btn
        :color="noProductor ? 'grey-5' : 'grey-3'"
        style="min-width: 200px; min-height: 200px; width: 45%"
        @click="setColor(false)"
      >
        <div class="fit column justify-center items-center">
          <q-icon
            name="fmd_good"
            size="xl"
            :color="noProductor ? 'secondary' : 'black'"
          />
          <span
            class="text-h6"
            :class="noProductor ? 'text-bold text-secondary' : 'text-black'"
          >No soy un Productor</span>
        </div>
      </q-btn>
    </div>
    <div class="q-pt-xl column full-width">
      <div
        style="min-width: 200px; width: 45%"
        class="q-pa-lg bg-grey-2 fle full-width"
      >
        <q-icon
          color="info"
          size="md"
          name="help"
        />
        <span class="text-subtitle1 q-pl-md">Eres un productor si tienes cultivas, fermentas, horneas, crías... etc  </span>
      </div>
      <div
        color="grey-5"
        style="min-width: 200px; min-height: 200px;"
        class="q-pt-lg full-width"
      >
        <div
          style="min-width: 200px; width: 45%"
          class="q-pa-lg bg-grey-2 fle full-width"
        >
          <q-icon
            color="info"
            size="md"
            name="help"
          />
          <span class="text-subtitle1 q-pl-md">Si no eres un productor, estarás relacionado con un distribuidor de alimentos. Puede ser un centro, una cooperativa, un grupo de compras, un minorista, un mayorista u otro. </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EnterpriseType",
  props: {
    isProductor: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      productor: false,
      noProductor: false
    }
  },
  methods: {
    setColor (isProductor) {
      if (isProductor) {
        this.productor = true
        this.noProductor = false
        this.$emit("update:isProductor", "productor")
      } else {
        this.noProductor = true
        this.productor = false
        this.$emit("update:isProductor", "noProductor")
      }
    }
  }
}
</script>
