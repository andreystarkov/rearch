import { fork } from 'redux-saga/effects'

import { sagas as githubSagas } from './GithubStore'
import { sagas as testSagas } from './TestStore'

export default function * root () {
  yield fork([
    githubSagas,
    testSagas
  ])
}
