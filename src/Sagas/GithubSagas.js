import { call, put } from 'redux-saga/effects'
import { log } from 'Utils/Log'

import ReposActions from 'Stores/MainStore'
const { fetchReposSuccess, fetchReposError } = ReposActions

export function * getReposListREST (api) {
  const response = yield call(api.getRepos, 'DaoCasino')
  log('Sagas/GithubSagas: getReposListREST', { response })
  if (response.ok) {
    // its fine!
    const repos = response.data
    yield put(fetchReposSuccess(repos))
  } else {
    // something went wrong
    const { problem } = response
    yield put(fetchReposError(problem))
  }
}

// import { LIST_REPOS_QUERY } from 'Services/GraphQL/Queries'

// export function * getReposListGraphQL ({ query, mutate }) {
//   const response = yield call(query, { query: LIST_REPOS_QUERY })
//   const isOk = response.networkStatus === 7 // https://github.com/apollographql/apollo-client/blob/master/packages/apollo-client/src/core/networkStatus.ts
//   log('Sagas/GithubSagas: getReposListGraphQL()', { response, isOk })
//   if (isOk) {
//     const repos = response.data.repositoryOwner.repositories.edges
//     log('Yo-hoo! Got github repos list via GraphQL: ', { repos })
//     fetchReposSuccess(repos)
//   } else {
//     fetchReposError(problem)
//     // your error handling here
//   }
// }
