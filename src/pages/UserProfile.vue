<template>
  <q-page class="column items-center justify-center">
    <q-card
      style="width: 40%; min-width: 400px; min-height: 600px"
      class="shadow-10"
    >
      <q-form
        greedy
        no-error-focus
        class="column items-center q-pa-xl"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        @submit="updateUser"
      >
        <span
          class="text-h4 q-pt-md"
          v-text="'Editar Perfil'"
        />
        <span
          class="text-subtitle2"
          v-text="'Actualice su correo electrónico y contraseña'"
        />
        <q-input
          v-model="email"
          class="full-width q-pt-xl"
          clearable
          type="email"
          label="Correo"
          :value="$store.getters['User/getEmail']"
          hint="Introducir si se quiere modificar"
          :rules="[
            val => $v.email.required || $t('signup.errorForm.fieldMissing'),
            val => $v.email.email || $t('signup.errorForm.emailFormat'),
          ]"
        />
        <q-input
          v-model="password"
          autocomplete="nope"
          class="full-width q-pt-xl"
          clearable
          :type="isPwd ? 'password' : 'text'"
          label="Contraseña actual"
          hint="Si va a modificar algún campo, introduzca su contraseña"
          :rules="[
            val => $v.password.required || $t('signup.errorForm.fieldMissing'),
            val => $v.password.minLength || $t('signup.errorForm.passwordLength'),
          ]"
        >
          <template #append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-input
          v-model="newPassword"
          class="full-width q-pt-xl"
          clearable
          autocomplete="chrome-off"
          :type="isPwd2 ? 'password' : 'text'"
          label="Nueva contraseña"
          hint="Introducir si se quiere modificar"
          :rules="[
            val => $v.newPassword.minLength || $t('signup.errorForm.passwordLength'),
          ]"
        >
          <template #append>
            <q-icon
              :name="isPwd2 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd2 = !isPwd2"
            />
          </template>
        </q-input>

        <q-card-actions class="q-px-lg justify-center full-width">
          <q-btn
            unelevated
            class="q-my-lg"
            color="primary"
            size="lg"
            type="submit"
            style="width: 60%"
            label="Actualizar datos"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators"

export default {
  name: "Login",
  data () {
    return {
      email: this.$store.getters["User/getEmail"],
      password: "",
      formActivator: 1,
      newPassword: "",
      isPwd: true,
      isPwd2: true
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(7) },
    newPassword: { minLength: minLength(7) }
  },
  methods: {
    async updateUser () {
      console.log("lets go")
      const res = await this.$store.dispatch("User/update", { email: this.email, password: this.password, newPassword: this.newPassword, id: this.$store.getters["User/getUserId"] })
      if (res.data.success) {
        this.$q.notify({
          message: res.data.msg,
          type: "positive",
          position: "top"
        })
        this.$router.push("/user/login")
      } else {
        this.$q.notify({
          message: res.data.msg,
          type: "negative",
          position: "top"
        })
      }
    }
  }
}
</script>
