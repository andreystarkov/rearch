import { put, delay } from 'redux-saga/effects'

import ReposActions from '../TestRedux'
const { fetchError } = ReposActions

const errors = {
  login: [
    'already taken',
  ],
  password: [
    'too short',
    'too simple'
  ],
  instagram: [
    'seems like your account is about dogs'
  ]
}

export function * fetchSomething () {
  yield delay(2000)
  console.log('asdad')
  yield put(fetchError(errors))
}