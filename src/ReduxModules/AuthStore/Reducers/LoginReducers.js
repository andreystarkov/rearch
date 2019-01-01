export const userLoginRequest = (state) =>
  state.merge({
    isLoggingIn: true,
    loginError: null
  })

export const userLoginSuccess = (state, { temperature }) =>
  state.merge({
    auth: true,
    isLoggingIn: false
  })

export const userLoginFailure = (state, { error }) =>
  state.merge({
    auth: false,
    isLoggingIn: false,
    loginError: error
  })
