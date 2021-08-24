import Vue from "vue"

export default {
  getCategories () {
    return Vue.prototype.$axios.get("/productCategories/")
  }
}
