<template>
  <q-page class="q-pa-xl ">
    <div class="row justify-center">
      <div class="q-pa-xl">
        <span class="text-h4">Busque, compare, y analice su alimentación!</span>
      </div>
      <div class="full-width row q-pt-md justify-center">
        <q-input
          v-model="product"
          type="search"
          label="Busque un producto"
          style="width: 70%; min-width=300px"
          filled
          color="primary"
          placeholder="eg: chocolate"
        >
          <template #append>
            <q-icon
              name="search"
              color="primary"
            />
            <q-btn
              size="sm"
              icon="check"
              color="primary"
              @click="filterByProduct"
            />
            <q-btn
              size="sm"
              icon="cancel"
              color="negative"
              @click="clearProductFilter"
            />
          </template>
        </q-input>
      </div>
      <q-separator
        class="full-width q-mt-xl"
        color="primary"
      />
      <div
        v-if="openFoodFactsObject"
        class="full-width"
      >
        <q-table
          :data="openFoodFactsObject"
          class="my-sticky-header-table"
          :columns="columns"
          :filter="filter"
          :visible-columns="visibleColumns"
          :loading="loadingTable"
          separator="horizontal"
          bordered
          style="max-height: 600px"
          :pagination.sync="pagination"
          :rows-per-page-options="$utils.rowsPerPageOptions()"
          :no-data-label="'No hay datos disponibles'"
          row-key="_id"
          :hide-bottom="openFoodFactsObject && openFoodFactsObject.length !== 0"
        >
          <template #top-left>
            <div
              class="text-h4 q-ma-md"
              v-text="'Datos provistos por Open Food Facts'"
            />
          </template>
          <template #top-right="scope">
            <div class="row q-gutter-md">
              <div class="column">
                <div class="row q-gutter-x-sm">
                  <q-input
                    v-model="filter"
                    filled
                    dense
                    class="col-10"
                    debounce="300"
                    placeholder="Buscar en la tabla"
                  >
                    <template #append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
                <div class="row justify-between q-my-sm">
                  <ShowHideColumnsButton
                    class="col-4 q-ml-sm"
                    :show-hide-columns="showHideColumns"
                    :visible-columns="visibleColumns"
                    @click="onTableColumnVisibilityToggle"
                  />
                  <TablePagination
                    :scope="scope"
                    :pagination="pagination"
                    :data-length="openFoodFactsObject && openFoodFactsObject.length ? openFoodFactsObject.length : 0"
                    :max-items="maxItems"
                    @getMoreData="getOpenFoodFactsProducts"
                  />
                </div>
              </div>
            </div>
          </template>
          <template #body-cell-image_url="props">
            <td :props="props">
              <q-img
                :src="props.row.image_url"
                spinner-color="white"
                style="max-width: 100px; max-height: 100px"
              />
            </td>
          </template>
        </q-table>
      </div>
    </div>
    <q-inner-loading :showing="visible">
      <q-spinner-gears
        size="50px"
        color="primary"
        transition-show="fade"
        transition-hide="fade"
      />
      <span v-text="'Recogiendo los datos de open food facts...'" />
    </q-inner-loading>
  </q-page>
</template>

<script>
import TablePagination from "components/Tables/TablePagination"
import ShowHideColumnsButton from "components/Tables/ShowHideColumnsButton"

export default {
  name: "ProductSearch",
  components: { TablePagination, ShowHideColumnsButton },

  data () {
    return {
      visible: false,
      product: "",
      maxItems: 0,
      openFoodFactsObject: [],
      page: 1,
      page_size: 96,
      page_count: 96,
      totalItems: 0,
      isFilterByProduct: false,

      filter: "",
      pagination: {
        rowsPerPage: 24
      },
      loadingTable: false,
      visibleColumns: []
    }
  },
  computed: {
    columns () {
      return [
        { name: "image_url", label: "Imagen del product", align: "center", field: "image_url" },
        { name: "product_name", label: "Nombre del producto", align: "center", field: "product_name", sortable: true },
        { name: "brands", label: "Marcas", align: "center", field: "brands", sortable: true },
        { name: "alergens", label: "Alergenos", align: "center", field: "alergens", sortable: true },
        { name: "stores", label: "Tiendas", align: "center", field: "stores", sortable: true },
        { name: "nutrition_data_per", label: "Datos nutricionales por cada", align: "center", field: "nutrition_data_per", sortable: true },
        { name: "carbohydrates", label: "Carbohidratos", align: "center", field: "carbohydrates", sortable: true },
        { name: "energy", label: "Calorías", align: "center", field: "energy", sortable: true },
        { name: "fat", label: "Grasa", align: "center", field: "fat", sortable: true },
        { name: "fiber", label: "Fibra", align: "center", field: "fiber", sortable: true },
        { name: "proteins", label: "Proteinas", align: "center", field: "proteins", sortable: true },
        { name: "salt", label: "Sal", align: "center", field: "salt", sortable: true },
        { name: "saturedFat", label: "Grasas saturadas", align: "center", field: "saturedFat", sortable: true },
        { name: "sodium", label: "Sodio", align: "center", field: "sodium", sortable: true },
        { name: "sugar", label: "Azucar", align: "center", field: "sugar", sortable: true }
      ]
    },
    showHideColumns () {
      return this.columns.filter(c => c.label !== "")
    }
  },
  async mounted () {
    if (!this.$store.getters["User/getRole"]) {
      this.$router.push("/user/login")
    }
    this.visibleColumns = this.columns.map(c => c.name)
    await this.getOpenFoodFactsProducts()
  },
  methods: {
    async getOpenFoodFactsProducts () {
      this.visible = true
      this.loadingTable = true
      if (!this.isFilterByProduct) {
        await this.$store.dispatch("ProductSearch/getOpenFoodFactsProducts", { page: this.page }).then((element) => {
          this.maxItems = element.maxItems
          element.data.forEach(product => {
            this.openFoodFactsObject.push(product)
          })
        })
      } else {
        await this.$store.dispatch("ProductSearch/getOpenFoodFactsCategoryProducts", { page: this.page, product: this.product }).then((element) => {
          this.maxItems = element.maxItems
          element.data.forEach(product => {
            this.openFoodFactsObject.push(product)
          })
        })
      }
      this.loadingTable = false
      this.visible = false
      this.page += 1
    },
    onTableColumnVisibilityToggle (col) {
      const index = this.visibleColumns.indexOf(col.name)
      if (index > -1) {
        this.visibleColumns.splice(index, 1)
      } else {
        this.visibleColumns.push(col.name)
      }
    },
    async clearProductFilter () {
      this.page = 1
      this.product = ""
      this.openFoodFactsObject = []
      this.isFilterByProduct = false
      await this.getOpenFoodFactsProducts()
    },
    async filterByProduct () {
      this.page = 1
      this.openFoodFactsObject = []
      this.isFilterByProduct = true
      await this.getOpenFoodFactsProducts()
    }
  }
}

</script>

<style lang="sass">
  .my-sticky-header-table
    height: calc(100vh - 55px - 2em)
    /* height or max-height is important */
    // height: 90vh

    thead tr th
      position: sticky
      z-index: 1
    thead tr:first-child th
    top: 0
</style>
