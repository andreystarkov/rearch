import { put, call } from 'redux-saga/effects'

import AuthActions from './AuthActions'

const {
  userRegisterSuccess,
  userRegisterFailure,
  userLoginSuccess,
  userLoginFailure
} = AuthActions

export function * userRegister () {
  const user = {
    email: 'a@a.a',
    name: 'Aaaa'
  }
  yield put(userRegisterSuccess({ ...user }))
}

export function * userLogin () {
  const user = {
    email: 'a@a.a',
    name: 'Aaaa'
  }
  yield put(userLoginSuccess({ ...user }))
}
