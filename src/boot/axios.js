import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL ? process.env.BASE_URL.replace(/"/g, "") : ""
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
