import { takeLatest, all } from 'redux-saga/effects'
import AuthActions, { AuthTypes } from './AuthActions'
import { reducer as AuthReducers } from './AuthReducers'
import * as AuthSelectors from './AuthSelectors'
import { userLogin, userRegister } from './AuthSagas'

function * authSagas () {
  yield all([
    takeLatest(AuthTypes.USER_LOGIN, userLogin),
    takeLatest(AuthTypes.USER_REGISTER, userRegister)
  ])
}

export {
  authSagas,
  AuthTypes,
  AuthReducers,
  AuthActions,
  AuthSelectors
}

export default AuthActions
