<template>
  <q-card
    style="width: 300px; height: 500px"
    class="row items-center cursor-pointer cardRadius justify-center q-mt-lg"
  >
    <q-card-section
      class="q-mx-xs"
      style="width: 100%"
    >
      <q-img
        class="cardRadius"
        :src="productData.image_url"
        style="width: 250px; height: 320px"
        :ratio="12/12"
      />
    </q-card-section>
    <div class="full-width q-px-xl">
      <q-separator
        class="full-width"
        size="5px"
        color="grey-10"
      />
    </div>
    <div
      style="height: 120px"
      class="full-width column justify-center items-center q-px-md"
    >
      <span v-text="productData.product_name_es ? productData.product_name_es : productData.product_name" />
    </div>
  </q-card>

<!--   <div
    class="cardRadius bg-blue q-mx-md q-mb-md "
    style="width: 300px; height: 600px"
  >
    <div
      class="cardRadiusTop q-pa-xl"
      :style="{ backgroundImage: 'url(' + productData.image_url + ')'}"
    />
  </div> -->
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

<style>
  .cardRadius {
    border-radius: 30px;
  }
  .cardRadiusTop {
    width: 300px;
    height: 300px;
    position: relative;
    background: green;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    border-bottom-left-radius: 60px;
  }

  .cardRadiusTop:after {
    content: "";
    position: absolute;
    height: 60px;
    width: 60px;
    bottom: 0;
    right: 0;
    top:100%;
    background:radial-gradient(circle at bottom left, #fff0 70%, green 75%);
  }

</style>
