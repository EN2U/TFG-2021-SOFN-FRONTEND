import RegisterSvc from "src/js/services/Register"

export async function signup (context, payload) {
  try {
    const response = await RegisterSvc.signup(payload)
    if (response.status === 201) return response
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status, error.response.error)
    } else {
      console.log("Se ha producido un error")
    }
  }
}

export async function login (context, payload) {
  try {
    const response = await RegisterSvc.login(payload)
    console.log(response)
    if (response.status === 200) return response
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status, error.response.error)
    } else {
      console.log("Se ha producido un error")
    }
  }
}
