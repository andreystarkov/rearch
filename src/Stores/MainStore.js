import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  updateStore: ['params'],
  fetchReposRequest: null,
  fetchReposSuccess: ['list'],
  fetchReposError: ['error']
})

export const MainTypes = Types
export default Creators

export const MAIN_INITIAL_STATE = {
  repos: {
    loading: false,
    error: false,
    errorCode: null,
    list: []
  }
}

export const INITIAL_STATE = Immutable(MAIN_INITIAL_STATE)

export const updateStore = (state, action) => state.merge({ ...action.params })

export const fetchReposRequest = (state, action) => {
  return state.merge({
    repos: { loading: true, error: false, errorCode: null, list: state.repos.list }
  })
}

export const fetchReposSuccess = (state, action) => {
  const { list } = action
  return state.merge({
    repos: { loading: false, error: false, list }
  })
}

export const fetchReposError = (state, action) => {
  const { errorCode } = action
  return state.merge({
    repos: { loading: false, error: true, errorCode, list: [] }
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STORE]: updateStore,
  [Types.FETCH_REPOS_REQUEST]: fetchReposRequest,
  [Types.FETCH_REPOS_SUCCESS]: fetchReposSuccess,
  [Types.FETCH_REPOS_ERROR]: fetchReposError
})
