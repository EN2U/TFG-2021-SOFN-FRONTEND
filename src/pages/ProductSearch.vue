<template>
  <q-page class="q-pa-xl ">
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
      <div
        v-if="openFoodFactsObject !== undefined"
        class="full-width"
      >
        <div
          v-if="openFoodFactsObject"
          class="q-mt-xl full-width row justify-around"
        >
          <div
            v-for="product in openFoodFactsObject.data"
            :key="product._id"
          >
            <ProductCard
              :product-data="product"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProductCard from "components/ProductSearch/ProductCard"

export default {
  name: "ProductSearch",
  components: { ProductCard },
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
    if (!this.$store.getters["User/getRole"]) {
      console.log(":)")
      this.$router.push("/user/login")
    }
    this.openFoodFactsObject = await this.$store.dispatch("ProductSearch/getOpenFoodFactsProducts", { page: this.page })
    this.page += 1
    this.test = this.openFoodFactsObject.data.slice(0, 4)
    console.log(this.test)
  }
}

</script>
