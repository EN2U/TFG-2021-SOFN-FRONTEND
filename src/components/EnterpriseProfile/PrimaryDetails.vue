<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">DETALLES PRINCIPALES</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 text-bold">Nombre
        <span class="text-red">*</span>
      </span>
      <q-input
        outlined
        class="q-pl-xl col-8"
        label="Nombre"
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
    <div class=" q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 ">Visible en el buscador</span>
      <q-option-group
        v-model="group"
        class="row q-pl-xl col-8"
        :options="[ {label: 'Visible', value: true}, {label: 'No Visible', value: false}]"
        type="radio"
      />
    </div>
    <div class=" q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 ">SOFN UID</span>
      <span
        class="q-pl-xl col-8 text-primary"
      >2222222</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "PrimaryDetails",
  data () {
    return {
      producerCheckbox: false,
      group: null
    }
  }
}

</script>
