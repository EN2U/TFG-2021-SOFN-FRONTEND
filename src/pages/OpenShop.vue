<template>
  <div class="row bg-red-2 items-center">
    <q-img
      class="center"
      style="height: 400px"
      src="../assets/openShopBanner.jpg"
    >
      <div class="absolute-full text-subtitle2 flex flex-center">
        <h1 class="text-bold">
          Crear su nueva tienda
        </h1>
      </div>
    </q-img>
    <div
      style="height: 1300px"
      class="q-pt-xl column bg-cyan full-width"
    >
      <div class="q-py-xl bg-red flex justify-center">
        <h2
          class="text-bold text-white"
          style="text-shadow: 1px 2px #000000"
        >
          ¿Cómo funciona?
        </h2>
      </div>
      <div
        class="row q-py-xl"
        style="height: 64%; min-width: 500px"
      >
        <div class="col-3 bg-blue flex justify-center full-height">
          :d
        </div>
        <div class="col-6 bg-red full-height flex justify-center ">
          :D
        </div>
        <div class="col-3 bg-pink full-height flex justify-center ">
          :D
        </div>
      </div>
      <div class="bg-grey column items-center">
        <div class="q-mb-md">
          <span class="text-h3 text-white">¿Empezamos?</span>
        </div>
        <q-btn
          size="xl"
          color="red-5"
          :label="$t('signup.title')"
          @click="$router.push('/enterprise/register')"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OpenShop",

  methods: {
    enterpriseRegister () {
      this.$router.push("/enterprise/register")
    }
  }
}
</script>
