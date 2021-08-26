<template>
  <div class="column flex items-center">
    <div class="flex column">
      <div class="q-mb-md text-center">
        <span class="text-h4 text-bold">Perfecto</span>
      </div>
      <div class="q-mb-md text-center">
        <span class="text-subtitle1">Registro completado, indique los detalles de la empresa:</span>
      </div>
    </div>
    <div class=" column items-center full-width">
      <q-uploader
        style="max-width: 300px"
        label="Logo"
        accept=".jpg, .png, image/*"
        @added="saveLogo"
        @rejected="onRejected"
      />
      <q-uploader
        style="max-width: 300px"
        label="Banner"
        accept=".jpg, image/*"
        @added="saveBanner"
        @rejected="onRejected"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "EnterpriseImage",
  props: {
    name: {
      type: String,
      default: ""
    },
    owner: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      logo: "",
      banner: ""
    }
  },
  methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },
    saveLogo (val) {
      const image = new Blob(val, { type: val[0].type })
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onloadend = () => {
        this.logo = reader.result
        this.$store.dispatch("EnterpriseRegister/updateLogo", { logo: reader.result, name: this.name, owner: this.owner })
      }
    },
    saveBanner (val) {
      const image = new Blob(val, { type: val[0].type })
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onloadend = () => {
        this.banner = reader.result
        this.$store.dispatch("EnterpriseRegister/updateBanner", { banner: reader.result, name: this.name, owner: this.owner })
      }
    }
  }
}

</script>
