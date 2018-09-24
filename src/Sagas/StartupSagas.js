import { call } from 'redux-saga/effects'

import { getReposListGraphQL, getReposListREST } from './GithubSagas'

export function * startup (api, client) {

  // // REST API Query example:
  // yield call(getReposListREST, api)

  // // GraphQL query example:
  // yield call(getReposListGraphQL, client)
}
