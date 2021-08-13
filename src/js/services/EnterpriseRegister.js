import Vue from "vue"

export default {
  enterpriseRegister (payload) {
    return Vue.prototype.$axios.post("/enterprise/", payload)
  },
  updateEnterpriseDetails (payload) {
    return Vue.prototype.$axios.put("/enterprise/details", payload)
  }
}
