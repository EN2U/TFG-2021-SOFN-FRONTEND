<template>
  <div class="column flex items-center">
    <div class="flex column">
      <div class="q-mb-md text-center">
        <span class="text-h4 text-bold">Último paso!</span>
      </div>
      <div class="q-mb-md text-center">
        <span class="text-subtitle1">Incluya las redes sociales de "empresa":</span>
      </div>
    </div>
    <div class="full-width">
      <div class="row ">
        <q-input
          color="purple-12"
          label="Página Web"
          style="min-width: 300px; width: 60%"
          hint="ej: google.com"
          class=" q-pt-sm q-px-md"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
        <q-input
          color="purple-12"
          label="Twitter"
          style="min-width: 300px; width: 40%"
          hint="ej: @twitter_handle"
          class=" q-pt-sm q-px-md"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
      </div>
      <div class="row ">
        <q-input
          color="purple-12"
          label="Facebook"
          style="min-width: 300px; width: 60%"
          hint="ej: www.facebook.com/NombreDeUsuario"
          class=" q-pt-sm q-px-md"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
        <q-input
          color="purple-12"
          label="Instagram"
          style="min-width: 300px; width: 40%"
          hint="ej: @intragram_handle"
          class=" q-pt-sm q-px-md"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
      </div>
      <q-input
        color="purple-12"
        label="Linkedin"
        style="min-width: 300px; width: 60%"
        class=" q-pt-sm q-px-md"
        hint="ej: www.linkedin.com/NombreDeUsuario"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
    </div>
  </div>
</template>
