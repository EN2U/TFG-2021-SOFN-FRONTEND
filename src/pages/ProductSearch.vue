<template>
  <q-page class="q-pa-xl ">
    <div class="row justify-center">
      <div class="q-pa-xl">
        <span class="text-h4">Busque, compare, y analice su alimentación!</span>
      </div>
      <div class="full-width row q-pt-md justify-center">
        <q-input
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
          :columns="columns"
          :filter="filter"
          :visible-columns="visibleColumns"
          :loading="loadingTable"
          separator="horizontal"
          bordered
          style="min-height: 600px"
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
                  />
                </div>
              </div>
            </div>
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
/* eslint-disable camelcase */
/* eslint-disable space-infix-ops */

export default {
  name: "ProductSearch",
  components: { TablePagination, ShowHideColumnsButton },

  data () {
    return {
      visible: false,
      openFoodFactsObject: null,
      page: 1,
      page_size: 96,
      page_count: 96,

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
        { name: "product_name", label: "Nombre del producto", align: "center", field: row => row.product_name_es !== "" && row.product_name_es ? row.product_name_es : row.product_name, sortable: true },
        { name: "brands", label: "Marcas", align: "center", field: "brands", sortable: true },
        { name: "alergens", label: "Alergenos", align: "center", field: "alergens", sortable: true },
        { name: "stores", label: "Tiendas", align: "center", field: "stores", sortable: true },
        { name: "nutrition_data_per", label: "Datos nutricionales por cada", align: "center", field: "nutrition_data_per", sortable: true },
        { name: "carbohydrates", label: "Carbohidratos", align: "center", field: row => row.nutriments.carbohydrates_100g !== "" && row.nutriments.carbohydrates_100g ? row.nutriments.carbohydrates_100g : row.nutriments.carbohydrates, sortable: true },
        { name: "energy-kcal", label: "Calorías", align: "center", field: row => row.nutriments.energy-kcal_100g !== "" && row.nutriments.energy-kcal_100g ? row.nutriments.energy-kcal_100g: row.nutriments.energy-kcal, sortable: true },
        { name: "", label: "", align: "center", field: "", sortable: true },
        { name: "", label: "", align: "center", field: "", sortable: true },
        { name: "", label: "", align: "center", field: "", sortable: true },
        { name: "", label: "", align: "center", field: "", sortable: true },
        { name: "", label: "", align: "center", field: "", sortable: true },
        { name: "", label: "", align: "center", field: "", sortable: true },
        { name: "", label: "", align: "center", field: "", sortable: true }
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
    this.page += 1
  },
  methods: {
    async getOpenFoodFactsProducts () {
      this.visible = true
      this.loadingTable = true
      this.openFoodFactsObject = await this.$store.dispatch("ProductSearch/getOpenFoodFactsProducts", { page: this.page })
      this.loadingTable = false
      this.visible = false
    },
    onTableColumnVisibilityToggle (col) {
      const index = this.visibleColumns.indexOf(col.name)
      if (index > -1) {
        this.visibleColumns.splice(index, 1)
      } else {
        this.visibleColumns.push(col.name)
      }
    }

  }
}

</script>
