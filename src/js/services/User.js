import Vue from "vue"

export default {
  signup (payload) {
    return Vue.prototype.$axios.post("/user/signup", payload)
  },
  login (payload) {
    return Vue.prototype.$axios.post("/user/login", payload)
  }
}
