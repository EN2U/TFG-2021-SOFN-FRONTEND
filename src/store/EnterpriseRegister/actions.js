import EnterpriseRegisterSvc from "src/js/services/EnterpriseRegister"

export async function newEnterprise (context, payload) {
  try {
    const response = await EnterpriseRegisterSvc.enterpriseRegister(payload)
    if (response.status === 201) return response
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status, error.response.error)
    } else {
      console.log("Se ha producido un error")
    }
  }
}

export async function updateEnterpriseDetails (context, payload) {
  try {
    const response = await EnterpriseRegisterSvc.updateEnterpriseDetails(payload)
    if (response.status === 200) return response
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status, error.response)
    } else {
      console.log("Se ha producido un error")
    }
  }
}
