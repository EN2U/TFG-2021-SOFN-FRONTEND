import CategoriesSvc from "src/js/services/Categories"

export async function getCategories (context, payload) {
  try {
    const response = await CategoriesSvc.getCategories()
    if (response.status === 200 || response.status === 204) return response.data.data
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status)
    } else {
      console.log("Se ha producido un error")
    }
  }
}
