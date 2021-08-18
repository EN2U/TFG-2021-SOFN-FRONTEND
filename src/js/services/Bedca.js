import Vue from "vue"

export default {
  getAllList () {
    return Vue.prototype.$axios.get("bedca/")
  }
}
