<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">Users</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Owner
        <span class="text-red">*</span>
      </span>
      <q-input
        v-model="enterpriseOwner"
        outlined
        class="q-pl-xl col-8"
        label="Usuario"
      />
    </div>
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Notificaciones
        <span class="text-red">*</span>
      </span>
      <q-input
        v-model="enterpriseEmail"
        outlined
        class="q-pl-xl col-8"
        label="Correo"
      />
    </div>
    <div class="row justify-end">
      <q-btn
        color="secondary"
        label="Actualizar campos"
        class="full-height q-mt-xl"
        @click="emitChanges"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    owner: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      enterpriseEmail: this.email,
      enterpriseOwner: this.owner
    }
  },
  methods: {
    emitChanges () {
      this.$emit("update:email", this.enterpriseEmail)
      this.$emit("update:owner", this.enterpriseOwner)
      this.$emit("clickUpdateEnterprise")
    }
  }
}
</script>
