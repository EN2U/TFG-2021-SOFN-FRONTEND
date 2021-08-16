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
    payload = _.pick(payload, ["email", "password", "newPassword"])
    return Vue.prototype.$axios.put(`/user/${payload.id}`, payload)
  }
}
