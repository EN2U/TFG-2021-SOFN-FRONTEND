import Vue from "vue"
import _ from "lodash"

export default {
  signup (payload) {
    return Vue.prototype.$axios.post("/user/signup", payload)
  },
  login (payload) {
    return Vue.prototype.$axios.post("/user/login", payload)
  },
  update (payload) {
    return Vue.prototype.$axios.put(`/user/${payload.id}`, _.pick(payload, ["email", "password", "newPassword"]))
  },
  deleteUser (payload) {
    console.log(payload.password)
    return Vue.prototype.$axios.delete(`/user/${payload.id}`, {
      data: {
        password: payload.password
      }
    })
  }
}
