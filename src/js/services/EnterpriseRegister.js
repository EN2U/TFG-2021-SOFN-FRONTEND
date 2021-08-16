import Vue from "vue"

export default {
  enterpriseRegister (payload) {
    return Vue.prototype.$axios.post("/enterprise/", payload)
  },
  updateEnterpriseDetails (payload) {
    return Vue.prototype.$axios.put("/enterprise/details", payload)
  },
  updateLogo (payload) {
    console.log(payload)
    return Vue.prototype.$axios.put("/enterprise/logo", payload)
  },
  updateBanner (payload) {
    return Vue.prototype.$axios.put("/enterprise/banner", payload)
  },
  updateEnterpriseSocial (payload) {
    return Vue.prototype.$axios.put("/enterprise/social", payload)
  }
}
