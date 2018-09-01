import { takeLatest, all } from 'redux-saga/effects'

import { client } from 'Services/Apollo'
import Api from 'Services/Api'

import { StartupTypes } from 'Stores/StartupStore'
import { startup } from './StartupSagas'

const api = Api.create()

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup, api, client)
  ])
}
