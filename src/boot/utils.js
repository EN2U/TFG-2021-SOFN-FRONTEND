import utils from "../js/Utils/Utils"

export default ({ store, Vue }) => {
  Vue.prototype.$utils = utils

  store.$utils = utils
}
