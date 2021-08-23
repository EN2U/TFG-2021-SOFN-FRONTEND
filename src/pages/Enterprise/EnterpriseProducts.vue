<template>
  <div class="full-width column q-px-xl">
    <div class="full-width bg-red-2 q-pa-md row items-center justify-between">
      <div class="row q-pa-md bg-red-2">
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
      <q-btn @click="$router.push('products/new')">
        <q-icon
          name="add"
          size="xs"
          color="primary"
          class="q-mr-sm"
        />
        <span>Añadir un producto</span>
      </q-btn>
    </div>
    <div
      v-if="selectedEnterprise"
      class="full-width row justify-between q-pt-lg"
    >
      <div>
        <q-input
          class="q-mr-xl"
          type="search"
          :debounce="600"
          label="Búsqueda rápida"
          style="min-width: 200px; width: 20%"
          outlined
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="row">
        <q-select
          type="search"
          :debounce="600"
          label="Categorías"
          style="min-width: 200px; width: 20%"
          outlined
          filled
          :options="['arroz', 'leche']"
          class="q-ml-xl"
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-select>
        <q-select
          type="search"
          :debounce="600"
          label="Fecha"
          style="min-width: 200px; width: 20%"
          outlined
          filled
          :options="['arroz', 'leche']"
          class="q-ml-md"
        >
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnterpriseProduct",
  data () {
    return {
      userEnterpriseProfile: [],
      selectedEnterprise: null
    }
  },
  async mounted () {
    const response = await this.$store.dispatch("EnterpriseRegister/getEnterpriseProfile", { user_id: this.$store.getters["User/getUserId"] })
    this.userEnterpriseProfile = response.data.enterprise
  }
}
</script>
