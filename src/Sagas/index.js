import { takeLatest, all } from 'redux-saga/effects'

import { client } from 'Services/Apollo'
import Api from 'Services/Api'

import { StartupTypes } from 'Stores/StartupStore'
import { MainTypes } from 'Stores/MainStore'

import { startup } from './StartupSagas'
import { getReposListREST } from './GithubSagas'

const api = Api.create()

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup, api, client),
    takeLatest(MainTypes.FETCH_REPOS_REQUEST, getReposListREST, api)
  ])
}
