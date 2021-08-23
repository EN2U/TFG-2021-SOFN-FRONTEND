<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">SOCIAL</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Facebook</span>
      <q-input
        v-model="enterpriseFacebook"
        outlined
        class="q-pl-xl col-8"
        label="Perfil de Facebook"
        placeholder="eg: www.facebook.com/NombrePagina"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Instagram</span>
      <q-input
        v-model="enterpriseInstagram"
        outlined
        class="q-pl-xl col-8"
        label="Instagram"
        placeholder="eg: @Usuario"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Linkedin</span>
      <q-input
        v-model="enterpriseLinkedin"
        outlined
        class="q-pl-xl col-8"
        label="Linkedin"
        placeholder="eg: www.linkedin.com/in/NombreDeUsuario"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Twitter</span>
      <q-input
        v-model="enterpriseTwitter"
        outlined
        class="q-pl-xl col-8"
        label="Twitter"
        placeholder="eg: @Usuario"
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
    facebook: {
      type: String,
      default: ""
    },
    twitter: {
      type: String,
      default: ""
    },
    linkedin: {
      type: String,
      default: ""
    },
    instagram: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      enterpriseFacebook: this.facebook,
      enterpriseTwitter: this.twitter,
      enterpriseLinkedin: this.linkedin,
      enterpriseInstagram: this.instagram
    }
  },
  methods: {
    emitChanges () {
      this.$emit("update:facebook", this.enterpriseFacebook)
      this.$emit("update:twitter", this.enterpriseTwitter)
      this.$emit("update:linkedin", this.enterpriseLinkedin)
      this.$emit("update:instagram", this.enterpriseInstagram)
      this.$emit("clickUpdateEnterprise")
    }
  }
}
</script>
