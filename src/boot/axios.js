/* import axios from "axios"

export default async ({ store, Vue }) => {
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL ? process.env.BASE_URL.replace(/"/g, "") : ""
  })

  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("apiToken")
    console.log("xd", config)
    if (token) {
      config.headers.Authorization = `Bearer ${store.getters["User/getApiToken"]}`
      console.log(config)
    }
    console.log("xd")
    return config
  },
  (error) => {
    console.log("xd")

    return Promise.reject(error)
  })

  Vue.prototype.$axios = axiosInstance
} */

import axios from "axios"

export default ({ app, router, store, Vue }) => {
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL ? process.env.BASE_URL.replace(/"/g, "") : ""
    // baseURL: 'http://localhost:8081/'
    // baseURL: 'https://api.devpre.kaudal.es/'
  })

  axiosInstance.interceptors.request.use(function (config) {
    // Add any endpoint that doesn't need authorization in the condition.
    console.log("request", config)

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
    console.log("response", config)
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
