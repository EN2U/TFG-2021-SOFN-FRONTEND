export function getUserId (state) {
  return state.userId
}
export function getRole (state) {
  return state.role
}
export function getApiToken (state) {
  return state.apiToken
}
export function getEmail (state) {
  return state.email
}
export function getIsLogged (state) {
  return state => !!state.apiToken
}
