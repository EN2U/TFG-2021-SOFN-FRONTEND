<template>
  <div class="full-width column q-px-xl">
    <div class="full-width bg-red-2 q-pa-md row items-center justify-between">
      <span>Productos</span>
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
    <div class="full-width row justify-between q-pt-lg">
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
