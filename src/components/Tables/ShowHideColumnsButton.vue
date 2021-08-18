Eduardo, [18.08.21 20:12]
<template>
  <div>
    <q-btn-dropdown
      label="Ocultar columnas"
      flat
      dense
      color="light"
      text-color="primary"
    >
      <q-list>
        <q-item
          v-for="col in showHideColumns"
          :key="col.name"
          dense
          v-bind="col"
          clickable
          :active="visibleColumns.includes(col.name)"
          active-class="text-secondary"
          @click="dropdownClicked(col)"
        >
          <q-item-section>
            <q-item-label>{{ col.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: "ShowHideColumnsButton",
  props: {
    showHideColumns: {
      type: Array,
      required: true,
      default: null
    },
    visibleColumns: {
      type: Array,
      required: true,
      default: null
    }
  },
  methods: {
    dropdownClicked (column) {
      this.$emit("click", column)
    }
  }
}
</script>
