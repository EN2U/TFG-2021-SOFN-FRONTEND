<template>
  <div class="column items-center">
    <div>
      <q-btn-dropdown
        :label="rowsLabel"
        flat
        dense
        auto-close
        text-color="primary"
        class="q-mx-sm"
        style="min-width: 180px;"
      >
        <q-list>
          <q-item
            v-for="row in rowsPerPageOptions"
            :key="row"
            dense
            clickable
            @click="evt => changeSelected(row)"
          >
            <q-item-section>
              <q-item-label>{{ row === 0 ? "Todas" : row }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <div v-if="scope.pagesNumber >= 2 && paginationList.rowsPerPage > 0">
      <q-btn
        icon="first_page"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isFirstPage"
        @click="scope.firstPage"
      />
      <q-btn
        icon="chevron_left"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isFirstPage"
        @click="scope.prevPage"
      />
      <q-btn
        icon="chevron_right"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isLastPage"
        @click="scope.nextPage"
      />
      <q-btn
        icon="last_page"
        color="grey-8"
        round
        dense
        flat
        :disable="scope.isLastPage"
        @click="scope.lastPage"
      />
      <q-tooltip content-class="custom-tooltip">
        {{ firstActualRow }} - {{ lastActualRow }} {{ "de" }} {{ dataLength }}
      </q-tooltip>
    </div>
    <div v-else>
      {{ firstActualRow }} - {{ dataLength }} {{ "de" }} {{ dataLength }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TablePagination",
  props: {
    scope: {
      type: Object,
      default: null
    },
    pagination: {
      type: Object,
      default: null
    },
    dataLength: {
      type: Number,
      default: 0
    },
    maxItems: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      paginationList: this.pagination,
      rowsLabel: `${this.getPreLabel(this.pagination.rowsPerPage)} ${"Filas"}`
    }
  },
  computed: {
    rowsPerPageOptions () {
      return this.$utils.rowsPerPageOptions()
    },
    pagesNumber () {
      return Math.ceil(this.dataLength / this.paginationList.rowsPerPage)
    },
    firstActualRow () {
      return this.paginationList.rowsPerPage * (this.paginationList.page - 1) + 1
    },
    lastActualRow () {
      const lastActualEstimatedRow = this.paginationList.rowsPerPage * this.paginationList.page
      if (lastActualEstimatedRow === this.dataLength && this.dataLength < this.maxItems) {
        this.$emit("getMoreData")
      }
      return lastActualEstimatedRow > this.dataLength ? this.dataLength : lastActualEstimatedRow
    }
  },
  watch: {
    pagination () {
      this.paginationList = this.pagination
    }
  },
  methods: {
    changeSelected (row) {
      this.rowsLabel = `${this.getPreLabel(row)} ${"Filas"}`
      this.paginationList.rowsPerPage = row
    },
    getPreLabel (row) {
      return row === 0 ? "Todas las" : row
    }
  }
}
</script>
