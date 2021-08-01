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
            {{ $t("login.title") }}
          </span>
        </q-card-section>
        <q-card-section class="full-width">
          <q-form class="q-gutter-lg full-width">
            <q-input
              v-model="email"
              square
              filled
              clearable
              color="red-5"
              class="bg-white"
              type="email"
              :label="$t('email')"
            />
            <q-input
              v-model="password"
              square
              filled
              clearable
              color="red-5"
              class="bg-white"
              type="password"
              autocomplete="on"
              :label="$t('password')"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg justify-center full-width">
          <q-btn
            unelevated
            color="red-5"
            size="lg"
            style="width: 60%"
            :label="$t('login.access')"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-none">
          <p class="text-grey-6">
            Not reigistered? Created an Account
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      email: "",
      password: ""
    }
  }
}
</script>

<style lang="sass" scoped>
  .loginCardSize
    width: 35%
    height: 45%
</style>
