<template>
  <q-dialog
    :value="openModal"
    @hide="$emit('update:openModal', false)"
  >
    <q-card
      class="full-width"
      style="max-width: 1000px; max-height: 1000px"
    >
      <q-card-section>
        <q-img
          v-if="enterprise.banner"
          style="max-height: 200px"
          :src="enterprise.banner"
        >
          <div
            class="absolute-full text-h4 flex flex-center"
            v-text="enterprise.name"
          />
        </q-img>
        <div
          v-else
          class="row justify-center text-h4"
          v-text="enterprise.name"
        />
      </q-card-section>
      <q-card-section>
        <span
          class="text-caption"
          v-text="enterprise.long_description ? enterprise.long_description : 'No hay descripción'"
        />
      </q-card-section>
      <q-separator />
      <q-card-section class="row col-12">
        <div class="col-4 q-pt-md col-md-4 row ">
          <q-icon
            size="xs"
            name="phone"
          />
          <span
            class="text-primary q-pl-sm text-caption"
            v-text="enterprise.contact_phone"
          />
        </div>
        <div class="col-4 q-pt-md col-md-4 row ">
          <q-icon
            size="xs"
            name="contact_mail"
          />
          <span
            class="text-primary  q-pl-sm text-caption"
            v-text="enterprise.email"
          />
        </div>
        <div
          v-if="enterprise.website"
          class="col-4 q-pt-md col-md-4 row "
        >
          <q-icon
            name="mdi-web"
            size="xs"
          />
          <span
            class="text-primary q-pl-sm text-caption"
            v-text="enterprise.website"
          />
        </div>
        <div
          v-if="enterprise.facebook"
          class="col-4 q-pt-md col-md-4 row "
        >
          <q-icon
            name="facebook"
            size="xs"
          />
          <span
            class="text-primary q-pl-sm text-caption"
            v-text="enterprise.facebook"
          />
        </div>
        <div
          v-if="enterprise.linkedin"
          class="col-4 q-pt-md col-md-4 row "
        >
          <q-icon
            name="mdi-linkedin"
            size="xs"
          />
          <span
            class="text-primary q-pl-sm text-caption"
            v-text="enterprise.linkedin"
          />
        </div>
        <div
          v-if="enterprise.instagram"
          class="col-4 q-pt-md col-md-4 row "
        >
          <q-icon
            name="mdi-instagram"
            size="xs"
          />
          <span
            class="text-primary q-pl-sm text-caption"
            v-text="enterprise.instagram"
          />
        </div>
        <div
          v-if="enterprise.twitter"
          class="col-4 q-pt-md col-md-4 row "
        >
          <q-icon
            name="mdi-twitter"
            size="xs"
          />
          <span
            class="text-primary q-pl-sm text-caption"
            v-text="enterprise.twitter"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-table
          :data="enterprise.product"
          class="my-sticky-virtscroll-table"
          :columns="columns"
          separator="horizontal"
          bordered
          :no-data-label="'No hay datos disponibles'"
          row-key="_id"
          style="max-height: 350px"
        />
      </q-card-section>
      <q-card-actions class="row justify-end">
        <q-btn
          size="sm"
          label="Salir"
          color="red"
          @click="$emit('update:openModal', false)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "EnterpriseDialog",
  props: {
    enterprise: {
      type: Object,
      default: null
    },
    openModal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    columns () {
      return [
        { name: "name", label: "Nombre", align: "center", field: "name", sortable: true },
        { name: "description", label: "Descripcion", align: "center", field: "description", sortable: true },
        { name: "category", label: "Categoría del producto", align: "center", field: "category", sortable: true },
        { name: "unit_type", label: "Tipo de unidad", align: "center", field: "unit_type", sortable: true },
        { name: "unit_size", label: "Cantidad por unidad", align: "center", field: "unit_size", sortable: true },
        { name: "price", label: "Precio por unidad", align: "center", field: "price", sortable: true },
        { name: "ammount", label: "Cantidad total del producto", align: "center", field: "ammount", sortable: true }
      ]
    }
  }
}
</script>
