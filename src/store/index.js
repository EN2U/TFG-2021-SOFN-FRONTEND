import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate"

import ProductSearch from "./ProductSearch"
import ProductCategory from "./ProductCategory"
import User from "./User"
import EnterpriseRegister from "./EnterpriseRegister"
import Bedca from "./Bedca"

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      ProductSearch,
      ProductCategory,
      User,
      EnterpriseRegister,
      Bedca
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    plugins: [createPersistedState()],
    strict: process.env.DEBUGGING
  })

  return Store
}
