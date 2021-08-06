<template>
  <q-page class="q-pa-xl bg-red-2">
    <div class="row justify-center">
      <div class="q-pa-xl">
        <span class="text-h4">Busque, compare, y analice su alimentación!</span>
      </div>
      <div class="full-width row q-pt-xl justify-center">
        <q-input
          type="search"
          label="Busque un producto"
          style="width: 70%; min-width=300px"
          filled
          color="primary"
          placeholder="eg: chocolate"
        >
          <template #append>
            <q-icon
              name="search"
              color="primary"
            />
          </template>
        </q-input>
      </div>
      <q-separator
        class="full-width q-mt-xl"
        color="primary"
      />
      <div class="full-width ">
        <div
          class="q-mt-xl full-width row justify-around"
        >
          <div
            v-for="product in test"
            :key="product._id"
          >
            <q-card
              style="width: 250px; height: 250px"
              class="row items-center justify-center"
            >
              <q-card-section
                class="bg-red"
                style="height: 70%; width: 70%"
              >
                Aqui la imagen
              </q-card-section>
              <q-card-section>
                Aqui el nombre del producto
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: "ProductSearch",
  data () {
    return {
      openFoodFactsObject: null,
      page: 1,
      page_size: 96,
      page_count: 96,
      test: null
    }
  },
  async mounted () {
    console.log("xd")
    this.openFoodFactsObject = await this.$store.dispatch("ProductSearch/getOpenFoodFactsProducts", { page: this.page })
    this.page += 1
    this.test = this.openFoodFactsObject.data.slice(0, 4)
    console.log(this.test)
  }
}

</script>
