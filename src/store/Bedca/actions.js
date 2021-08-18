import BedcaSvc from "src/js/services/Bedca"

export async function getAllList (context, payload) {
  try {
    const response = await BedcaSvc.getAllList()
    if (response.status === 200 || response.status === 204) return response.data.bedcaList
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status)
    } else {
      console.log("Se ha producido un error")
    }
  }
}
