<template>
  <q-page class="q-pa-md bg-red-2 flex justify-center items-center">
    <div style="width: 50%;">
      <q-stepper
        ref="stepper"
        v-model="step"
        animated
        done-color="red-5"
        active-color="purple"
        inactive-color="secondary"
      >
        <q-step
          :name="1"
          title="Detalles"
          icon="manage_accounts"
          :done="step > 1"
        >
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
              >
                <template #prepend>
                  <q-icon name="home" />
                </template>
              </q-input>
              <q-input
                color="purple-12"
                label="Ciudad"
                class="col-4 q-px-md"
              >
                <template #prepend>
                  <q-icon name="location_city" />
                </template>
              </q-input>
              <q-input
                color="purple-12"
                label="Código postal"
                class="col-2 q-px-md"
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
              >
                <template #prepend>
                  <q-icon name="home" />
                </template>
              </q-input>
              <q-input
                color="purple-12"
                label="País"
                class="col-6 q-px-md"
              >
                <template #prepend>
                  <q-icon name="flag" />
                </template>
              </q-input>
            </div>
          </div>
        </q-step>

        <q-step
          :name="2"
          title="Contacto"
          icon="create_new_folder"
          :done="step > 2"
        >
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
        </q-step>

        <q-step
          :name="3"
          title="Tipo empresa"
          icon="add_comment"
          :done="step > 3"
        >
          <div class="column flex items-center">
            <div class="flex column">
              <div class="q-mb-md text-center">
                <span class="text-h4 text-bold">Para finalizar su registro</span>
              </div>
              <div class="q-mb-md text-center">
                <span class="text-subtitle1">¿Es un productor?</span>
              </div>
            </div>
            <div class="row full-width justify-around">
              <q-btn
                color="grey-5"
                style="min-width: 200px; min-height: 200px; width: 45%"
              >
                <div class="fit column justify-center items-center">
                  <q-icon
                    name="agriculture"
                    size="xl"
                    color="red-5"
                  />
                  <span class="text-h6 text-bold">Soy un Productor</span>
                </div>
              </q-btn>
              <q-btn
                color="grey-5"
                style="min-width: 200px; min-height: 200px; width: 45%"
              >
                <div class="fit column justify-center items-center">
                  <q-icon
                    name="fmd_good"
                    size="xl"
                    color="red-5"
                  />
                  <span class="text-h6 text-bold">No soy un Productor</span>
                </div>
              </q-btn>
            </div>
            <div class="q-pt-xl column full-width">
              <div
                style="min-width: 200px; width: 45%"
                class="q-pa-lg bg-grey-2 fle full-width"
              >
                <q-icon
                  color="red-5"
                  size="md"
                  name="help"
                />
                <span class="text-subtitle1 q-pl-md">Eres un productor si tienes cultivas, fermentas, horneas, crías... etc  </span>
              </div>
              <div
                color="grey-5"
                style="min-width: 200px; min-height: 200px;"
                class="q-pt-lg full-width"
              >
                <div
                  style="min-width: 200px; width: 45%"
                  class="q-pa-lg bg-grey-2 fle full-width"
                >
                  <q-icon
                    color="red-5"
                    size="md"
                    name="help"
                  />
                  <span class="text-subtitle1 q-pl-md">Si no eres un productor, estarás relacionado con un distribuidor de alimentos. Puede ser un centro, una cooperativa, un grupo de compras, un minorista, un mayorista u otro. </span>
                </div>
              </div>
            </div>
          </div>
        </q-step>

        <template #navigation>
          <q-stepper-navigation>
            <q-btn
              color="deep-orange"
              :label="step === 3 ? 'Finish' : 'Continue'"
              @click="$refs.stepper.next()"
            />
            <q-btn
              v-if="step > 1"
              flat
              color="deep-orange"
              label="Back"
              class="q-ml-sm"
              @click="$refs.stepper.previous()"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>

export default {
  data () {
    return {
      step: 1
    }
  }
}
</script>
