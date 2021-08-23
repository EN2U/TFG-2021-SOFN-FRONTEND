<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">ABOUT</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Descripción corta</span>

      <q-input
        v-model="enterpriseShortDescription"
        color="purple-12"
        placeholder="Resumen de la compañía en una o dos frases"
        class="q-pl-xl col-8"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Sobre nosotros</span>
      <q-input
        v-model="enterpriseLongDescription"
        color="purple-12"
        placeholder="Información para los consumidores. Esta información aparecerá pública en su perfil"
        type="textarea"
        class="q-pl-xl col-8"
      />
    </div>
    <div class="row justify-end">
      <q-btn
        color="secondary"
        label="Actualizar campos"
        class="full-height q-mt-xl"
        @click="emitChanges"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    shortDescription: {
      type: String,
      default: ""
    },
    longDescription: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      enterpriseShortDescription: this.shortDescription,
      enterpriseLongDescription: this.longDescription
    }
  },
  methods: {
    emitChanges () {
      this.$emit("update:shortDescription", this.enterpriseShortDescription)
      this.$emit("update:longDescription", this.enterpriseLongDescription)
      this.$emit("clickUpdateEnterprise")
    }
  }
}
</script>
