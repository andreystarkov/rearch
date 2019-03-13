import { fork } from 'redux-saga/effects'

import { sagas as githubSagas } from './GithubStore'

export default function * root () {
  yield fork(
    githubSagas
  )
}
