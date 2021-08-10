<template>
  <q-page class="bg-red-2 row justify-center items-center">
    <div class="column items-center loginCardSize">
      <q-form
        :key="formActivator"
        class="q-gutter-lg full-width"
        no-error-focus
        greedy
        @submit="saveUser"
      >
        <q-card
          square
          bordered
          class="column items-center full-width shadow-15"
        >
          <q-card-section
            class="bg-red-5 flex justify-center fit"
          >
            <span
              style="text-shadow: #000000 3px 0 10px;"
              class="text-h4 text-white"
              v-text="$t('signup.title')"
            />
          </q-card-section>
          <q-card-section class="full-width">
            <q-input
              v-model="email"
              class="q-mb-md"
              color="blue-grey-10"
              type="email"
              clearable
              label="E-mail"
              autocomplete="on"
              hint="Formato: xxx@xxx.xx"
              :rules="[
                val => $v.email.required || $t('signup.errorForm.fieldMissing'),
                val => $v.email.email || $t('signup.errorForm.emailFormat'),
              ]"

              counter
              maxlength="30"
              @input="$v.email.$touch()"
            />
            <q-input
              v-model="password"
              square
              filled
              clearable
              color="red-5"
              class="bg-white"
              type="password"
              hint="Tamaño mínimo 7"
              :rules="[
                val => $v.password.required || $t('signup.errorForm.fieldMissing'),
                val => $v.password.minLength || $t('signup.errorForm.passwordLength'),
              ]"

              counter
              :label="$t('password')"
              @input="$v.password.$touch()"
            />
            <q-input
              v-model="confirmPassword"
              square
              filled
              clearable
              color="red-5"
              class="bg-white"
              type="password"
              autocomplete="on"
              hint="La contraseña a de ser igual a la anterior"
              :rules="[
                val => $v.confirmPassword.required || $t('signup.errorForm.fieldMissing'),
                val => $v.confirmPassword.sameAsPassword || $t('signup.errorForm.passwordNotMatch'),
              ]"

              :label="$t('signup.confirmPassword')"
              @input="$v.confirmPassword.$touch()"
            />
          </q-card-section>
          <q-card-actions class="q-px-lg justify-center full-width">
            <q-btn
              unelevated
              color="red-5"
              size="lg"
              type="submit"
              style="width: 60%"
              :label="$t('signup.access')"
            />
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators"

export default {
  name: "Login",
  data () {
    return {
      email: "",
      password: "",
      formActivator: 1,
      confirmPassword: ""
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(7) },
    confirmPassword: { required, sameAsPassword: sameAs("password") }
  },
  methods: {
    async saveUser () {
      const res = await this.$store.dispatch("Register/signup", { email: this.email, password: this.password, confirmPassword: this.confirmPassword })
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

<style lang="sass" scoped>
  .loginCardSize
    width: 35%
    height: 45%

</style>
