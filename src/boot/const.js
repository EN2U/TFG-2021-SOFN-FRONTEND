import Const from "../js/Utils/Const"

export default ({ store, Vue }) => {
  Vue.prototype.$const = Const
  store.$const = Const
}
