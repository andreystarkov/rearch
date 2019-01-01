import { takeLatest, all, fork } from 'redux-saga/effects'

import { client } from 'Services/Apollo'
import Api from 'Services/Api'

import { StartupTypes } from './StartupStore'
import { authSagas } from './AuthStore'

const api = Api.create()

export function * startupSaga () {
  // Runs on startup
  console.log('Startup')
}

// Listener (*take) sagas imported from stores

const sagas = [
  authSagas
]

// Init listener sagas

export function * initSagas () {
  console.log('Init sagas', { sagas })
  yield all(sagas.map(saga => fork(saga)))
  return true
}

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startupSaga, api, client),
    initSagas()
  ])
}
