import Vue from "vue"

export default {
  getOpenFoodFactsProducts (payload) {
    return Vue.prototype.$axios.post("/openFoodFacts/allElements", payload)
  },
  findOpenFoodFactsProduct (payload) {
    console.log(payload)
    return Vue.prototype.$axios.post("/openFoodFacts/findByProduct", payload)
  }
}
