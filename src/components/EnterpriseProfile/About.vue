<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">ABOUT</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Descripción corta</span>

      <q-input
        color="purple-12"
        placeholder="Resumen de la compañía en una o dos frases"
        class="q-pl-xl col-8"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">About us</span>
      <q-input
        color="purple-12"
        placeholder="Información para los consumidores. Esta información aparecerá pública en su perfil"
        type="textarea"
        class="q-pl-xl col-8"
      />
    </div>
  </div>
</template>
