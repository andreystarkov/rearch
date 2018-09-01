import { call } from 'redux-saga/effects'
import { log } from 'Utils/Log'
import { LIST_REPOS_QUERY } from 'Services/GraphQL/Queries'

export function * getReposListREST (api) {
  const response = yield call(api.getRepos, 'tsvetkovpro')
  log('Sagas/GithubSagas: getReposListREST()', { response })
  if (response.ok) {
    const repos = response.data
    log('Got repos list via REST API (like its 2007)', { repos })
  } else {
    // something went wrong
  }
}

export function * getReposListGraphQL ({ query, mutate }) {
  const response = yield call(query, { query: LIST_REPOS_QUERY })
  const isOk = response.networkStatus === 7 // https://github.com/apollographql/apollo-client/blob/master/packages/apollo-client/src/core/networkStatus.ts
  log('Sagas/GithubSagas: getReposListGraphQL()', { response, isOk })
  if (isOk) {
    const repos = response.data.repositoryOwner.repositories.edges
    log('Yo-hoo! Got github repos list via GraphQL: ', { repos })
  } else {
    // your error handling here
  }
}
