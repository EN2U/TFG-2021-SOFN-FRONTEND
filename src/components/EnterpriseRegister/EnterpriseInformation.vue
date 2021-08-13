<template>
  <div class="column flex items-center">
    <div class="flex column">
      <div class="q-mb-md text-center">
        <span class="text-h4 text-bold">Para empezar</span>
      </div>
      <div class="q-mb-md text-center">
        <span class="text-subtitle1">Necesitamos un poco de información sobre su empresa:</span>
      </div>
    </div>
    <div class="full-width">
      <q-input
        color="purple-12"
        label="Seleccione una empresa"
        class="full-width q-px-md"
        :value="name"
        hint="Este campo no puede estar vacio"
        @input="$emit('update:name', $event)"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
    </div>
    <div class="row q-pt-lg full-width">
      <q-input
        color="purple-12"
        label="Primera dirección"
        class="col-6 q-px-md"
        :value="address1"
        hint="Este campo no puede estar vacio"
        @input="$emit('update:address1', $event)"
      >
        <template #prepend>
          <q-icon name="home" />
        </template>
      </q-input>
      <q-input
        color="purple-12"
        label="Ciudad"
        class="col-4 q-px-md"
        :value="city"
        hint="Este campo no puede estar vacio"
        @input="$emit('update:city', $event)"
      >
        <template #prepend>
          <q-icon name="location_city" />
        </template>
      </q-input>
      <q-input
        color="purple-12"
        label="Código postal"
        class="col-2 q-px-md"
        :value="zip"
        hint="Este campo no puede estar vacio"
        @input="$emit('update:zip', $event)"
      >
        <template #prepend>
          <q-icon name="drafts" />
        </template>
      </q-input>
    </div>
    <div class="row q-pt-lg full-width">
      <q-input
        color="purple-12"
        label="Segunda dirección"
        class="col-6 q-px-md"
        :value="address2"
        @input="$emit('update:address2', $event)"
      >
        <template #prepend>
          <q-icon name="home" />
        </template>
      </q-input>
      <q-input
        color="purple-12"
        label="País"
        class="col-6 q-px-md"
        :value="country"
        hint="Este campo no puede estar vacio"
        @input="$emit('update:country', $event)"
      >
        <template #prepend>
          <q-icon name="flag" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>

export default {
  name: "EnterpriseInformation",
  props: {
    name: {
      type: String,
      default: ""
    },
    address1: {
      type: String,
      default: ""
    },
    address2: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    },
    zip: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    }
  }
}
</script>
