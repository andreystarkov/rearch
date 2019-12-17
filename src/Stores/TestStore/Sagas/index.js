import { takeLatest, all } from 'redux-saga/effects'

import { fetchSomething } from './ReposSagas'

import { TestTypes } from '../TestRedux'

function * sagas () {
  console.log('sdasdasss')
  yield all([
    takeLatest(TestTypes.FETCH_REQUEST, fetchSomething)
  ])
}

export default sagas
