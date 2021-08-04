<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">CONTACTO</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Nombre</span>
      <q-input
        outlined
        class="q-pl-xl col-8"
        label="Nombre"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Correo público</span>
      <q-input
        outlined
        class="q-pl-xl col-8"
        label="Dirección de correo"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Teléfono</span>
      <q-input
        outlined
        mask="(###) ### - ###"
        hint="Mask: (###) ### - ###"
        class="q-pl-xl col-8"
        label="Teléfono de contacto"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Web</span>
      <q-input
        outlined
        class="q-pl-xl col-8"
        label="Página web"
        placeholder="www.google.com"
      />
    </div>
  </div>
</template>
