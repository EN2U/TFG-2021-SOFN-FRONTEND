<template>
  <div class="column flex items-center">
    <div class="flex column">
      <div class="q-mb-md text-center">
        <span class="text-h4 text-bold">Comunicación</span>
      </div>
      <div class="q-mb-md text-center">
        <span class="text-subtitle1">Necesitamos saber quien es el responsable de la "enterprise" y su contacto: </span>
      </div>
    </div>
    <div class="full-width">
      <q-input
        color="purple-12"
        label="Nombre de contacto principal"
        class="full-width q-pt-sm q-px-md"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
      <q-input
        color="purple-12"
        label="Dirección de correo público"
        class="full-width q-pt-sm q-px-md"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
      <q-input
        color="purple-12"
        label="Teléfono de contacto"
        class="full-width q-pt-sm q-px-md"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
    </div>
  </div>
</template>
