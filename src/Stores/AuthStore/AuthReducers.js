import { AUTH_INITIAL_STATE } from './AuthInitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './AuthActions'
import { userLoginRequest, userLoginSuccess, userLoginFailure } from './Reducers/LoginReducers'

export const LoginReducer = createReducer(AUTH_INITIAL_STATE, {
  [AuthTypes.USER_LOGIN_REQUEST]: userLoginRequest,
  [AuthTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [AuthTypes.USER_LOGIN_FAILURE]: userLoginFailure
})
