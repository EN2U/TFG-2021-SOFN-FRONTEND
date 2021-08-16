<template>
  <q-page class=" row justify-center items-center">
    <div class="column items-center loginCardSize">
      <q-form
        class="full-width q-ma-xl"
        @submit="login"
      >
        <q-card
          square
          bordered
          style="width: 40%; min-width: 400px; min-height: 600px"
          class="column items-center full-width shadow-15"
        >
          <q-card-section
            class="flex justify-center q-pt-lg fit"
          >
            <div class="column items-center">
              <span
                style=""
                class="text-h4 q-pa-md "
              >
                {{ $t("login.title") }}
              </span>
              <span>
                Bienvenido de vuelta...
              </span>
            </div>
          </q-card-section>
          <q-card-section class="full-width">
            <q-form class="q-gutter-lg full-width">
              <q-input
                v-model="email"
                square
                clearable
                color="red-5"
                class="bg-white q-pt-lg"
                type="email"
                :label="$t('email')"
              />
              <q-input
                v-model="password"
                square
                clearable
                color="red-5"
                class="bg-white q-pt-lg"
                type="password"
                autocomplete="on"
                :label="$t('password')"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg q-pt-lg justify-center full-width">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              type="submit"
              style="width: 60%"
              :label="$t('login.access')"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">
              ¿No está registrado?
              <span
                class="text-primary cursor-pointer"
                @click="$router.push('/user/register')"
              >Cree su cuenta</span>
            </p>
          </q-card-section>
        </q-card>
      </q-form>
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
  },

  methods: {
    async login () {
      const res = await this.$store.dispatch("User/login", { email: this.email, password: this.password })
      if (res.data.success) {
        this.$q.notify({
          message: res.data.msg,
          type: "positive",
          position: "top"
        })
        this.$router.push("/search")
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
