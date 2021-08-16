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
          :value="web"
          color="purple-12"
          label="Página Web"
          style="min-width: 300px; width: 60%"
          hint="ej: google.com"
          class=" q-pt-sm q-px-md"
          @input="$emit('update:web', $event)"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
        <q-input
          :value="twitter"
          color="purple-12"
          label="Twitter"
          style="min-width: 300px; width: 40%"
          hint="ej: @twitter_handle"
          class=" q-pt-sm q-px-md"
          @input="$emit('update:twitter', $event)"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
      </div>
      <div class="row ">
        <q-input
          :value="facebook"
          color="purple-12"
          label="Facebook"
          style="min-width: 300px; width: 60%"
          hint="ej: www.facebook.com/NombreDeUsuario"
          class=" q-pt-sm q-px-md"
          @input="$emit('update:facebook', $event)"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
        <q-input
          :value="instagram"
          color="purple-12"
          label="Instagram"
          style="min-width: 300px; width: 40%"
          hint="ej: @intragram_handle"
          class=" q-pt-sm q-px-md"
          @input="$emit('update:instagram', $event)"
        >
          <template #prepend>
            <q-icon name="domain" />
          </template>
        </q-input>
      </div>
      <q-input
        :value="linkedin"
        color="purple-12"
        label="Linkedin"
        style="min-width: 300px; width: 60%"
        class=" q-pt-sm q-px-md"
        hint="ej: www.linkedin.com/NombreDeUsuario"
        @input="$emit('update:linkedin', $event)"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnterpriseSocial",
  props: {
    name: {
      type: String,
      default: ""
    },
    owner: {
      type: String,
      default: ""
    },
    web: {
      type: String,
      default: ""
    },
    twitter: {
      type: String,
      default: ""
    },
    facebook: {
      type: String,
      default: ""
    },
    instagram: {
      type: String,
      default: ""
    },
    linkedin: {
      type: String,
      default: ""
    }
  }
}
</script>
