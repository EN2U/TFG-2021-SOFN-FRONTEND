<template>
  <div class="row items-center">
    <q-img
      class="center"
      style="height: 400px"
      src="../assets/openShopBanner.jpg"
    >
      <div class="absolute-full text-subtitle2 flex flex-center">
        <h1 class="text-bold">
          Cómo abrir una tienda
        </h1>
      </div>
    </q-img>
    <div
      style="height: 1300px"
      class="q-pt-xl column full-width"
    >
      <div class="q-py-xl flex justify-center">
        <h2
          class="text-bold"
        >
          ¿Cómo funciona?
        </h2>
      </div>
      <div
        class="row q-py-xl bg-grey-2"
        style="height: 64%; min-width: 400px"
      >
        <div class="col-3 flex justify-center full-height">
          :d
        </div>
        <div class="col-6 full-height flex justify-center ">
          <div
            class="q-pa-lg q-px-xl text-h5 text-center"
            v-text="'Abrir una tienda le permitirá exponer sus productos dentro de nuestra plataforma, de forma que podrá promocionar todos sus productos de manera gratuita'"
          />
          <div
            class="q-pa-lg q-px-xl text-h5 text-center"
            v-text="'Los clientes de la aplicación podrán acceder a sus productos, ver los precios y contactar con la tienda para realizar una compra'"
          />
          <div
            class="q-pa-lg q-px-xl text-h5 text-center"
            v-text="'Podrá crear tantas tiendas como quiera, indicando si es un productor o un proveedor'"
          />
          <div
            class="q-pa-lg q-px-xl text-h5 text-center"
            v-text="'Para empezar, solo deberá crear su tienda siguiendo los pasos del formulario a continuación'"
          />
        </div>
        <div class="col-3 full-height flex justify-center ">
          :D
        </div>
      </div>
      <div class="column items-center">
        <div class="q-mb-md">
          <span class="text-h3 text-bold">¿Empezamos?</span>
        </div>
        <q-btn
          size="xl"
          color="red-5"
          label="Registre su tienda"
          @click="$router.push('/enterprise/register')"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OpenShop",
  mounted () {
    if (!this.$store.getters["User/getRole"]) {
      this.$router.push("/user/login")
    }
  },

  methods: {
    enterpriseRegister () {
      this.$router.push("/enterprise/register")
    }
  }
}
</script>
