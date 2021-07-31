<template>
  <q-page class="bg-red-2 row justify-center items-center">
    <div class="column items-center loginCardSize">
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
          >
            {{ $t("signup.title") }}
          </span>
        </q-card-section>
        <q-card-section class="full-width">
          <q-form
            :key="formActivator"
            class="q-gutter-lg full-width"
            no-error-focus
            greedy
          >
            <q-input
              v-model="email"
              class="q-mb-md"
              color="blue-grey-10"
              type="email"
              clearable
              label="E-mail"
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
              :rules="[
                val => $v.confirmPassword.required || $t('signup.errorForm.fieldMissing'),
                val => $v.confirmPassword.sameAsPassword || $t('signup.errorForm.passwordNotMatch'),
              ]"

              :label="$t('signup.confirmPassword')"
              @input="$v.confirmPassword.$touch()"
            />
          </q-form>
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
  }
}
</script>

<style lang="sass" scoped>
  .loginCardSize
    width: 35%
    height: 45%
</style>
