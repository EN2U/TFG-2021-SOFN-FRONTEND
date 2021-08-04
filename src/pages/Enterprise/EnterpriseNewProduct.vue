<template>
  <div class="full-width row q-px-xl">
    <div class="q-pa-xl col-8 column">
      <div
        class="row items-center justify-center full-width"
        style="min-width: 100px"
      >
        <span class="text-center text-bold text-h6 q-px-md">Datos del producto</span>
      </div>
      <div class="q-pt-md ">
        <q-input label="Nombre del producto" />
      </div>
      <div class="row q-pt-xl justify-between">
        <q-select
          style="min-width: 300px; width: 40%"
          color="primary"
          outlined
          label="Tipo de unidad"
          :options="['Kg', 'g', 'L', 'Kl', 'unidad']"
        />
        <q-input
          class="q-pl-lg"
          style=" width: 60%"
          label="Cantidad"
        />
      </div>
      <div class="row q-pt-md justify-between">
        <q-select
          style="min-width: 300px; width: 40%"
          color="primary"
          outlined
          label="Tipo de unidad"
          :options="['Pescado', 'Huevos', 'Carne', 'Cultivo', 'Cafe']"
        />
        <div
          class="row justify-around"
          style="min-width: 300px; width: 60%"
        >
          <q-input
            style="min-width: 150px; width: 50%"
            class="q-px-md"
            label="Precio"
          />
          <q-input
            style="min-width: 150px; width: 50%"
            class="q-pl-md"
            label="Precio por unidad"
          />
        </div>
      </div>
      <div class="q-pt-md">
        <q-input
          color="purple-12"
          label="Descripción del producto"
          type="textarea"
          class="col-8 q-px-md"
        />
      </div>
      <div class="q-pt-md row justify-end">
        <q-btn
          class="q-mr-md"
          color="primary"
          @click="$router.push('/enterprise/products')"
        >
          <q-icon
            name="check"
            size="xs"
          />
          <span class="text-subtitle2">Crear</span>
        </q-btn>
        <q-btn
          color="primary"
          @click="$router.push('/enterprise/products')"
        >
          <q-icon
            name="close"
            size="xs"
          />
          <span
            class="text-subtitle2"
          >Borrar</span>
        </q-btn>
      </div>
    </div>
    <div
      class="q-pa-xl col-4 items-center column"
      style="min-width: 300px; min-height: 250px"
    >
      <div
        class="row items-center justify-center full-width"
        style="min-width: 250px"
      >
        <span class="text-center text-bold text-h6 q-px-md">Imagen del producto</span>
      </div>
      <div
        class="q-pt-xl"
        @click="choosepicture"
      >
        <q-btn
          class="hint bg-purple-12 text-white full-width"
          style="cursor: pointer"
        >
          Imagen del producto
        </q-btn>
        <input
          ref="fileInput"
          hidden
          class="file-input"
          type="file"
          @input="onSelectFile"
        >
      </div>
      <div
        style="min-width: 250px; min-height: 250px; max-width: 600px; max-height: 600px;"
        class="q-py-lg  full-width "
      >
        <q-img
          :src="imageData"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      step: 1,
      imageData: null
    }
  },
  methods: {
    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      this.FileImage = files[0]
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit("input", files[0])
      }
    },
    choosepicture () {
      this.$refs.fileInput.click()
    }
  }
}
</script>
