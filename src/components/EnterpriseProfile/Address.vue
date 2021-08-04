<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">DIRECCIÓN</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 text-bold">Primera dirección
        <span class="text-red">*</span>
      </span>
      <q-input
        outlined
        class="q-pl-xl col-8"
        label="Primera dirección"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Segunda dirección</span>
      <q-input
        outlined
        class="q-pl-xl col-8"
        label="Segunda dirección"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 text-bold">Ciudad / Código postal
        <span class="text-red">*</span>
      </span>
      <q-input
        outlined
        class="q-pl-xl col-4"
        label="Ciudad"
      />
      <q-input
        outlined
        class="q-pl-md col-4"
        label="ZIP"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2 text-bold">País
        <span class="text-red">*</span>
      </span>
      <q-input
        outlined
        class="q-pl-xl col-8"
        label="País"
      />
    </div>
  </div>
</template>
