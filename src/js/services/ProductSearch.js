import Vue from "vue"

export default {
  getOpenFoodFactsProducts (payload) {
    return Vue.prototype.$axios.post("http://localhost:3000/api/openFoodFacts/allElements", payload)
  }
}
