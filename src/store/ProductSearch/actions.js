import ProductSearchSvc from "src/js/services/ProductSearch"

export async function getOpenFoodFactsProducts (context, payload) {
  try {
    const response = await ProductSearchSvc.getOpenFoodFactsProducts(payload)
    if (response.status === 200 || response.status === 204) return response.data
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status)
    } else {
      console.log("Se ha producido un error")
    }
  }
}
