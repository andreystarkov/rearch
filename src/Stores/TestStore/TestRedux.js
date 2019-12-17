import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

import { fetchRequest, fetchSuccess, fetchError } from './Reducers'

const { Types, Creators } = createActions({
  updateStore: ['params'],
  fetchRequest: null,
  fetchSuccess: ['list'],
  fetchError: ['error']
})

export const TestTypes = Types
export default Creators

export const GITHUB_INITIAL_STATE = {
  data: {
    loading: false,
    error: {
      instagram: [],
      login: [],
      password: []
    }
  }
}

export const INITIAL_STATE = Immutable(GITHUB_INITIAL_STATE)

export const updateStore = (state, action) => state.merge({ ...action.params })

export const reducers = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STORE]: updateStore,
  [Types.FETCH_REQUEST]: fetchRequest,
  [Types.FETCH_SUCCESS]: fetchSuccess,
  [Types.FETCH_ERROR]: fetchError
})
