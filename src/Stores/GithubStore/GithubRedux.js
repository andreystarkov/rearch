import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { fetchReposRequest, fetchReposSuccess, fetchReposError } from './Reducers'

const { Types, Creators } = createActions({
  updateStore: ['params'],
  fetchReposRequest: null,
  fetchReposSuccess: ['list'],
  fetchReposError: ['error']
})

export const GithubTypes = Types
export default Creators

export const GITHUB_INITIAL_STATE = {
  repos: {
    loading: false,
    error: false,
    errorCode: null,
    list: []
  }
}

export const INITIAL_STATE = Immutable(GITHUB_INITIAL_STATE)

export const updateStore = (state, action) => state.merge({ ...action.params })

export const reducers = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STORE]: updateStore,
  [Types.FETCH_REPOS_REQUEST]: fetchReposRequest,
  [Types.FETCH_REPOS_SUCCESS]: fetchReposSuccess,
  [Types.FETCH_REPOS_ERROR]: fetchReposError
})
