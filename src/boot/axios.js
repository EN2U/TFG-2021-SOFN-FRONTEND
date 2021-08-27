import axios from "axios"

export default ({ app, router, store, Vue }) => {
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL ? process.env.BASE_URL.replace(/"/g, "") : ""
    // baseURL: 'http://localhost:8081/'
    // baseURL: 'https://api.devpre.kaudal.es/'
  })

  axiosInstance.interceptors.request.use(function (config) {
    // Add any endpoint that doesn't need authorization in the condition.

    if (config.url !== "token") {
      const token = "bearer " + store.getters["User/getApiToken"]
      config.headers.Authorization = token
    }

    if (!store.getters["User/getApiToken"]) {
      router.push("/user/login")
    }
    return config
  })

  axiosInstance.interceptors.response.use(function (config) {
    // Add any endpoint that doesn't need authorization in the condition.
    if (config.url !== "token") {
      const token = "bearer " + store.getters["User/getApiToken"]
      config.headers.Authorization = token
    }
    if (!store.getters["User/getApiToken"]) {
      router.push("/user/login")
    }
    return config
  })

  Vue.prototype.$axios = axiosInstance
}
