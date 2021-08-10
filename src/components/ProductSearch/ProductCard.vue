<template>
  <q-card
    style="width: 250px; height: 250px"
    class="row items-center cursor-pointer justify-center q-mt-lg"
  >
    <q-card-section
      class="q-mx-xs"
      style="width: 100%"
    >
      <q-img
        :src="productData.image_url"
        :ratio="16/12"
      />
    </q-card-section>
    <q-card-section>
      <span v-text="productData.product_name_es ? productData.product_name_es : productData.product_name" />
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  name: "ProductCard",
  props: {
    productData: {
      type: Object,
      default: null
    }
  }
}
</script>
