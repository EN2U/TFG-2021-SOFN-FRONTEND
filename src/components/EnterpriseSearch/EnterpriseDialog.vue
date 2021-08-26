<template>
  <q-dialog
    :value="openModal"
    persistent
  >
    <q-card style="min-width: 500px; min-height: 500px">
      <q-btn
        label="Salir"
        color="red"
        @click="$emit('update:openModal', false)"
      />
      {{ enterprise }}
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
  }
}
</script>
