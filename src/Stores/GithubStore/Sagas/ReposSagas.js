import { call, put } from 'redux-saga/effects'

import ReposActions from '../GithubRedux'
const { fetchReposSuccess, fetchReposError } = ReposActions

export function * getReposList (api) {
  const response = yield call(api.getRepos, 'andreystarkov')
  console.log('getReposListREST', { response })
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
