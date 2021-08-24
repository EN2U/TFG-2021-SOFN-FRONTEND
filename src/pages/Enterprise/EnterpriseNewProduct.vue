<template>
  <div class="full-width row q-px-xl">
    <div class="q-pa-xl col-8 column">
      <!-- PRIMERA FILA -->

      <div
        class="row items-center justify-center full-width"
        style="min-width: 100px"
      >
        <span class="text-center text-bold text-h6 q-px-md">Datos del producto</span>
      </div>
      <div class="q-pt-md ">
        <q-input
          v-model="name"
          label="Nombre del producto"
          placeholder="Platano canario"
        />
      </div>
      <div class="row q-pt-xl justify-between">
        <q-select
          v-model="selectedUnit"
          style="min-width: 200px; width: 40%"
          color="primary"
          outlined
          label="Tipo de unidad"
          :options="['Kg', 'g', 'L', 'Kl', 'unidad']"
        />
        <q-input
          v-model="ammount"
          placeholder="100"
          type="number"
          class="q-pl-lg"
          style=" width: 60%"
          label="Cantidad"
        />
      </div>
      <!-- SEGUNDA FILA -->
      <div class="row q-pt-md justify-between">
        <q-select
          v-model="selectedCategory"
          style="min-width: 300px; width: 40%"
          color="primary"
          outlined
          option-label="name"
          label="Categoria"
          :options="categories"
        />
        <div
          class="row justify-around"
          style="min-width: 300px; width: 60%"
        >
          <q-input
            v-model="unitPrice"
            placeholder="3.22"
            style="min-width: 100px; width: 50%"
            type="number"
            mask="#.##€"
            class="q-px-md"
            label="Precio por unidad"
          />
          <q-input
            v-model="unitSize"
            placeholder="100"
            style="min-width: 100px; width: 50%"
            class="q-pl-md"
            label="Unidad"
          />
        </div>
      </div>
      <!-- DESCRIPCION -->
      <div class="q-pt-md">
        <q-input
          v-model="description"
          color="purple-12"
          label="Descripción del producto"
          type="textarea"
          class="col-8 q-px-md"
        />
      </div>
      <!-- BOTONES -->
      <div class="q-pt-md row justify-end">
        <q-btn
          class="q-mr-md"
          color="primary"
          @click="saveProduct"
        >
          <q-icon
            name="check"
            size="xs"
          />
          <span class="text-subtitle2">Crear</span>
        </q-btn>
        <q-btn
          color="negative"
          class="q-mr-md"
          @click="$router.push('/enterprise/products')"
        >
          <q-icon
            name="close"
            size="xs"
          />
          <span
            class="text-subtitle2"
          >Cancelar</span>
        </q-btn>
        <q-btn
          color="info"
          @click="clear"
        >
          <q-icon
            name="close"
            size="xs"
          />
          <span
            class="text-subtitle2"
          >Limpiar</span>
        </q-btn>
      </div>
    </div>
    <!-- IMAGEN DEL PRODUCTO -->
    <!--     <div
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
    </div> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      step: 1,
      imageData: null,
      selectedEnterprise: null,
      categories: null,
      selectedCategory: null,
      selectedUnit: null,
      name: "",
      ammount: null,
      unitSize: null,
      unitPrice: null,
      description: ""

    }
  },
  async mounted () {
    this.selectedEnterprise = await this.$store.dispatch("EnterpriseRegister/getEnterpriseById", { enterprise_id: this.$route.params.id })
    this.categories = await this.$store.dispatch("ProductCategory/getCategories")
  },
  methods: {
    async saveProduct () {
      const response = await this.$store.dispatch("EnterpriseRegister/saveNewProduct", {
        enterprise_id: this.$route.params.id,
        product: {
          name: this.name,
          ammount: this.ammount,
          unit_type: this.selectedUnit,
          unit_size: this.unitSize,
          price: this.unitPrice,
          description: this.description,
          category: this.selectedCategory.name
        }
      })
      if (response.data.success) {
        this.$q.notify({
          message: response.data.msg,
          type: "positive",
          position: "top"
        })
        this.clear()
      } else {
        this.$q.notify({
          message: response.data.error,
          type: "negative",
          position: "top"
        })
      }
    },
    clear () {
      this.selectedEnterprise = null
      this.selectedCategory = null
      this.selectedUnit = null
      this.name = ""
      this.ammount = null
      this.unitSize = null
      this.unitPrice = null
      this.description = ""
    }
    /* onSelectFile () {
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
    } */
  }
}
</script>

<style lang="sass">
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

</style>
