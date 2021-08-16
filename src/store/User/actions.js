import UserSvc from "src/js/services/User"

export async function signup (context, payload) {
  try {
    const response = await UserSvc.signup(payload)
    if (response.status === 201) return response
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status, error.response.error)
    } else {
      console.log("Se ha producido un error")
    }
  }
}

export async function update (context, payload) {
  try {
    const response = await UserSvc.update(payload)
    if (response.status === 200) {
      return response
    }
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
    const response = await UserSvc.login(payload)
    if (response.status === 200) {
      context.commit("SET_USER_ID", response.data.user)
      context.commit("SET_ROLE", response.data.role)
      context.commit("SET_API_TOKEN", response.data.token)
      context.commit("SET_EMAIL", response.data.email)
      return response
    }
  } catch (error) {
    if (error.response !== undefined) {
      console.log(error.response.status, error.response.error)
    } else {
      console.log("Se ha producido un error")
    }
  }
}

export async function resetStore (context, payload) {
  context.commit("SET_USER_ID", null)
  context.commit("SET_ROLE", "")
  context.commit("SET_API_TOKEN", null)
  context.commit("SET_EMAIL", "")
}
