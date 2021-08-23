<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">DETALLES PRINCIPALES</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 text-bold">Nombre
        <span class="text-red">*</span>
      </span>
      <q-input
        v-model="enterpriseName"
        outlined
        class="q-pl-xl col-8"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 ">Productor Primario</span>
      <q-checkbox
        v-model="producerCheckbox"
        class="q-pl-xl col-8"
        label="Productor"
      />
    </div>
    <!--     <div class=" q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 ">Visible en el buscador</span>
      <q-option-group
        v-model="group"
        class="row q-pl-xl col-8"
        :options="[ {label: 'Visible', value: true}, {label: 'No Visible', value: false}]"
        type="radio"
      />
    </div> -->
    <div class=" q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 ">SOFN UID</span>
      <span
        class="q-pl-xl col-8 text-primary"
        v-text="uid"
      />
    </div>
    <div class="row justify-end">
      <q-btn
        color="secondary"
        label="Actualizar campos"
        class="full-height q-mt-xl"
        @click="emitChanges"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "PrimaryDetails",
  props: {
    name: {
      type: String,
      default: ""
    },
    productor: {
      type: Boolean,
      default: false
    },
    uid: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      producerCheckbox: this.productor,
      group: null,
      enterpriseName: this.name
    }
  },
  methods: {
    emitChanges () {
      this.$emit("update:name", this.enterpriseName)
      this.$emit("update:productor", this.producerCheckbox)
      this.$emit("clickUpdateEnterprise")
    }
  }
}

</script>
