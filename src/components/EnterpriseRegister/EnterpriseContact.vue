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
        :value="contact"
        color="purple-12"
        label="Nombre de contacto principal"
        class="full-width q-pt-sm q-px-md"
        hint="Este campo no puede estar vacio"
        @input="$emit('update:contact', $event)"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
      <q-input
        :value="email"
        color="purple-12"
        label="Dirección de correo público"
        class="full-width q-pt-sm q-px-md"
        hint="Este campo no puede estar vacio y a de ser xxx@xxx.xx"
        :rules="[val => !!val || 'Email is missing',
                 val => emailPattern.test(val) || 'Email not valid'
        ]"
        @input="$emit('update:email', $event)"
      >
        <template #prepend>
          <q-icon name="domain" />
        </template>
      </q-input>
      <q-input
        :value="phone"
        color="purple-12"
        label="Teléfono de contacto"
        class="full-width q-pt-sm q-px-md"
        hint="Este campo no puede estar vacio"
        @input="$emit('update:phone', $event)"
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
  name: "EnterpriseContact",
  props: {
    contact: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      emailPattern: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
    }
  },
  methods: {
  }

}
</script>
