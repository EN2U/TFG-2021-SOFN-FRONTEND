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
        url="/enterprise/logo"
        label="Logo"
        accept=".jpg, .png, image/*"
        @rejected="onRejected"
      />
      <q-uploader
        style="max-width: 300px"
        url="/enterprise/banner"
        label="Banner"
        accept=".jpg, image/*"
        @rejected="onRejected"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "EnterpriseImage",
  data () {
    return {
      image: "",
      url: process.env.BASE_URL
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
    }
  }
}

</script>
