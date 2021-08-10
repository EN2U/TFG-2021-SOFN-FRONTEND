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
        ref="image"
        inverted
        color="secondary"
        stack-label="Imagem Principal"
        :v-model="product.attributes.image"
        :url="product.attributes.image"
        auto-expand
        hide-upload-button
        hide-upload-progress
        no-thumbnails
        @change="handleFileUpload()"
      />
      {{ image }}
    </div>
  </div>
</template>

<script>

export default {
  name: "EnterpriseImage",
  data () {
    return {
      image: "",
      product: {
        attributes: {
          image: ""
        }
      }
    }
  },
  methods: {
    handleFileUpload () {
      console.log("xd")
      this.image = this.$refs.image.files[0]
    }
  }

}

</script>
