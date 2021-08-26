<template>
  <div class="full-width column q-px-xl">
    <div
      class="q-mt-lg"
    >
      <q-table
        :data="selectedEnterprise.product"
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
        :hide-bottom="selectedEnterprise.product.lenght !== 0"
      >
        <template #top-left>
          <div
            class="text-h4 q-ma-md"
            v-text="'Datos provistos por BEDCA'"
          />
          <div class="full-width bg-red-1 row items-center justify-between">
            <div class="row q-pa-md bg-red-1">
              <q-select
                v-model="selectedEnterprise"
                :options="userEnterpriseProfile"
                option-label="name"
                filled
                class="text-bold text-h5"
                style="min-width: 400px"
                hint="Seleccione su empresa"
              />
            </div>
            <q-btn
              v-if="selectedEnterprise"
              class="q-mr-md"
              @click="$router.push(`products/${selectedEnterprise._id}`)"
            >
              <q-icon
                name="add"
                size="xs"
                color="primary"
                class="q-mr-sm"
              />
              <span>Añadir un producto</span>
            </q-btn>
          </div>
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
                  label="Busque datos en la tabla"
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
                  :data-length="selectedEnterprise.product && selectedEnterprise.product.length ? selectedEnterprise.product.length : 0"
                />
              </div>
            </div>
          </div>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import TablePagination from "components/Tables/TablePagination"
import ShowHideColumnsButton from "components/Tables/ShowHideColumnsButton"
export default {
  name: "EnterpriseProduct",
  components: { TablePagination, ShowHideColumnsButton },

  data () {
    return {
      userEnterpriseProfile: [],
      selectedEnterprise: null,
      categories: null,
      selectedCategory: null,
      filter: "",
      pagination: {
        rowsPerPage: 15
      },
      loadingTable: false,
      visibleColumns: []
    }
  },
  computed: {
    columns () {
      return [
        { name: "name", label: "Nombre", align: "center", field: "name", sortable: true },
        { name: "description", label: "Descripcion", align: "center", field: "description", sortable: true },
        { name: "unit_size", label: "Cantidad por unidad", align: "center", field: "unit_size", sortable: true },
        { name: "unit_type", label: "Tipo de unidad", align: "center", field: "unit_type", sortable: true },
        { name: "category", label: "Categoría del producto", align: "center", field: "category", sortable: true },
        { name: "price", label: "Precio por unidad", align: "center", field: "price", sortable: true },
        { name: "ammount", label: "Cantidad total del producto", align: "center", field: "ammount", sortable: true }
      ]
    },
    showHideColumns () {
      return this.columns.filter(c => c.label !== "")
    }
  },
  async mounted () {
    this.loadingTable = true
    this.visibleColumns = this.columns.map(c => c.name)
    this.userEnterpriseProfile = await this.$store.dispatch("EnterpriseRegister/getEnterpriseProfile", { user_id: this.$store.getters["User/getUserId"] })
    this.selectedEnterprise = this.userEnterpriseProfile[0]
    this.categories = await this.$store.dispatch("ProductCategory/getCategories")
    this.loadingTable = false
  },
  methods: {
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
