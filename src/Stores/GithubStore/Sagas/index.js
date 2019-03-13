import { takeLatest, all } from 'redux-saga/effects'

import GithubApi from '../Api/GithubApi'
import { getReposList } from './ReposSagas'

import { GithubTypes } from '../GithubRedux'

const api = GithubApi.create()

function * sagas () {
  yield all([
    takeLatest(GithubTypes.FETCH_REPOS_REQUEST, getReposList, api)
  ])
}

export default sagas
