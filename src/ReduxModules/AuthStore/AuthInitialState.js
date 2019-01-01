import { Map } from 'immutable'

export const AUTH_INITIAL_STATE = Map({
  auth: false,
  isLoggingIn: false,
  isRegistering: false,
  loginError: null,
  registerError: null
})
