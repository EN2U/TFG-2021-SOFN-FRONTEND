<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">IMAGENES</span>
    <q-separator color="grey-4" />
    <div class="row justify-around full-width q-pt-xl">
      <div>
        <q-uploader
          style="max-width: 400px"
          label="Logo"
          accept=".jpg, .png, image/*"
          @added="saveLogo"
          @rejected="onRejected"
        />
      </div>
      <div>
        <q-uploader
          style="max-width: 400px"
          label="Banner"
          accept=".jpg, image/*"
          @added="saveBanner"
          @rejected="onRejected"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "EnterpriseProfileImage",
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
      reader.onloadend = async () => {
        this.logo = reader.result
        this.notification(await this.$store.dispatch("EnterpriseRegister/updateLogo", { logo: reader.result, name: this.name, owner: this.owner }))
      }
    },
    saveBanner (val) {
      const image = new Blob(val, { type: val[0].type })
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onloadend = async () => {
        this.banner = reader.result
        this.notification(await this.$store.dispatch("EnterpriseRegister/updateBanner", { banner: reader.result, name: this.name, owner: this.owner }))
      }
    },
    notification (res) {
      if (res.data.success) {
        this.$q.notify({
          message: res.data.msg,
          type: "positive",
          position: "top"
        })
      } else {
        this.$q.notify({
          message: res.data.error,
          type: "negative",
          position: "top"
        })
      }
    }
  }
}
</script>
