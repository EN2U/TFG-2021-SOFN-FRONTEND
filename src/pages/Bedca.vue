<template>
  <div class="q-pa-xl">
    <q-table
      :data="bedcaList"
      class="my-sticky-virtscroll-table"
      style="height: 85vh"
      :columns="columns"
      :filter="filter"
      :visible-columns="visibleColumns"
      :loading="loadingTable"
      separator="horizontal"
      bordered
      :pagination.sync="pagination"
      :rows-per-page-options="$utils.rowsPerPageOptions()"
      :no-data-label="'No hay datos disponibles'"
      row-key="_id"
      :hide-bottom="bedcaList.lenght !== 0"
    >
      <template #top-left>
        <div
          class="text-h4 q-ma-md"
          v-text="'Datos provistos por BEDCA'"
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
                :data-length="bedcaList && bedcaList.length ? bedcaList.length : 0"
              />
            </div>
          </div>
        </div>
      </template>
    </q-table>
    <q-inner-loading :showing="visible">
      <q-spinner-gears
        size="50px"
        color="primary"
        transition-show="fade"
        transition-hide="fade"
      />
      <span v-text="'Recogiendo los datos de BEDCA...'" />
    </q-inner-loading>
  </div>
</template>

<script>
import TablePagination from "components/Tables/TablePagination"
import ShowHideColumnsButton from "components/Tables/ShowHideColumnsButton"

export default {
  name: "Bedca",
  components: { TablePagination, ShowHideColumnsButton },
  data () {
    return {
      loadingTable: false,
      visibleColumns: [],
      filter: "",
      visible: false,
      bedcaList: [],
      pagination: {
        rowsPerPage: 24
      }
    }
  },
  computed: {
    columns () {
      return [
        { name: "f_ori_name", label: "Nombre", align: "center", field: "f_ori_name", sortable: true },
        { name: "edible_portion", label: "Porción", align: "center", field: "edible_portion", sortable: true },
        { name: "alcohol", label: "alcohol", align: "center", field: "alcohol", sortable: true },
        { name: "energía", label: "energía", align: "center", field: "energía", sortable: true },
        { name: "grasa", label: "grasa", align: "center", field: "grasa", sortable: true },
        { name: "proteina", label: "proteina", align: "center", field: "proteina", sortable: true },
        { name: "agua", label: "agua", align: "center", field: "agua", sortable: true },
        { name: "carbohidratos", label: "carbohidratos", align: "center", field: "carbohidratos", sortable: true },
        { name: "fibra", label: "fibra", align: "center", field: "fibra", sortable: true },
        { name: "colesterol", label: "colesterol", align: "center", field: "colesterol", sortable: true },
        { name: "vitamina_A", label: "vitamina A", align: "center", field: "vitamina_A", sortable: true },
        { name: "vitamina_D", label: "vitamina D", align: "center", field: "vitamina_D", sortable: true },
        { name: "vitamina_E", label: "vitamina E", align: "center", field: "vitamina_E", sortable: true },
        { name: "folato", label: "folato", align: "center", field: "folato", sortable: true },
        { name: "niacina", label: "niacina", align: "center", field: "niacina", sortable: true },
        { name: "riboflavina", label: "riboflavina", align: "center", field: "riboflavina", sortable: true },
        { name: "tiamina", label: "tiamina", align: "center", field: "tiamina", sortable: true },
        { name: "vitamina_B12", label: "vitamina B12", align: "center", field: "vitamina_B12", sortable: true },
        { name: "vitamina_B6", label: "vitamina B6", align: "center", field: "vitamina_B6", sortable: true },
        { name: "vitamina_C", label: "vitamina C", align: "center", field: "vitamina_C", sortable: true },
        { name: "calcio", label: "calcio", align: "center", field: "calcio", sortable: true },
        { name: "hierro", label: "hierro", align: "center", field: "hierro", sortable: true },
        { name: "potasio", label: "potasio", align: "center", field: "potasio", sortable: true },
        { name: "magnesio", label: "magnesio", align: "center", field: "magnesio", sortable: true },
        { name: "sodio", label: "sodio", align: "center", field: "sodio", sortable: true },
        { name: "fosforo", label: "fosforo", align: "center", field: "fosforo", sortable: true },
        { name: "ioduro", label: "ioduro", align: "center", field: "ioduro", sortable: true },
        { name: "selenio", label: "selenio", align: "center", field: "selenio", sortable: true },
        { name: "zinc", label: "zinc", align: "center", field: "zinc", sortable: true }
      ]
    },
    showHideColumns () {
      return this.columns.filter(c => c.label !== "")
    }
  },
  async mounted () {
    this.loadingTable = true
    this.visible = true
    this.visibleColumns = this.columns.map(c => c.name)

    await this.getBedcaList()
    this.visible = false
    this.loadingTable = false
  },
  methods: {
    async getBedcaList () {
      this.bedcaList = await this.$store.dispatch("Bedca/getAllList")
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
