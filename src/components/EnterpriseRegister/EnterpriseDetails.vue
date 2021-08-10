<template>
  <div class="column flex items-center">
    <div class="flex column">
      <div class="q-mb-md text-center">
        <span class="text-h4 text-bold">Perfecto</span>
      </div>
      <div class="q-mb-md text-center">
        <span class="text-subtitle1">Registro completado, indique los detalles de la empresa:</span>
      </div>
    </div>
    <div class="row q-pt-lg full-width">
      <q-input
        color="purple-12"
        label="Descripción corta"
        class="col-8 q-px-md"
      >
        <template #prepend>
          <q-icon name="home" />
        </template>
      </q-input>
      <q-input
        color="purple-12"
        label="Número de compañía"
        class="col-4 q-px-md"
      >
        <template #prepend>
          <q-icon name="drafts" />
        </template>
      </q-input>
    </div>
    <div class="row q-pt-lg full-width">
      <q-input
        color="purple-12"
        label="Descripción larga"
        type="textarea"
        class="col-8 q-px-md"
      >
        <template #prepend>
          <q-icon name="home" />
        </template>
      </q-input>
      <q-input
        color="purple-12"
        label="Número de caridad "
        class="col-4 q-px-md"
      >
        <template #prepend>
          <q-icon name="flag" />
        </template>
      </q-input>
    </div>
  </div>
</template>
