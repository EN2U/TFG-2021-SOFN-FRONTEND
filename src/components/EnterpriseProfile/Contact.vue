<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">CONTACTO</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Correo público</span>
      <q-input
        v-model="enterpriseEmail"
        outlined
        class="q-pl-xl col-8"
        label="Dirección de correo"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Teléfono</span>
      <q-input
        v-model="enterprisePhone"
        outlined
        class="q-pl-xl col-8"
        label="Teléfono de contacto"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Web</span>
      <q-input
        v-model="enterpriseWebsite"
        outlined
        class="q-pl-xl col-8"
        label="Página web"
        placeholder="www.google.com"
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
  name: "Contact",
  props: {
    email: {
      type: String,
      default: ""
    },
    phone: {
      type: Number,
      default: 0
    },
    website: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      enterpriseEmail: this.email,
      enterprisePhone: this.phone,
      enterpriseWebsite: this.website
    }
  },
  methods: {
    emitChanges () {
      this.$emit("update:email", this.enterpriseEmail)
      this.$emit("update:phone", this.enterprisePhone)
      this.$emit("update:website", this.enterpriseWebsite)
      this.$emit("clickUpdateEnterprise")
    }
  }
}
</script>
