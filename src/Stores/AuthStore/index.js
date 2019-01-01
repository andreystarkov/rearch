import { takeLatest, all } from 'redux-saga/effects'
import AuthActions, { AuthTypes } from './AuthActions'
import { LoginReducer } from './AuthReducers'
import * as AuthSelectors from './AuthSelectors'
import { userLogin, userRegister } from './AuthSagas'

function * authSagas () {
  yield all([
    takeLatest(AuthTypes.USER_LOGIN_REQUEST, userLogin),
    takeLatest(AuthTypes.USER_REGISTER_REQUEST, userRegister)
  ])
}

export {
  AuthActions,
  authSagas,
  AuthTypes,
  AuthSelectors,
  LoginReducer
}

export default AuthActions
