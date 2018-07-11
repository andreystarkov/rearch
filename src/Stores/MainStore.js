import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  updateStore: ['params']
})

export const MainTypes = Types
export default Creators

export const MAIN_INITIAL_STATE = {
  repos: []
}

export const INITIAL_STATE = Immutable(MAIN_INITIAL_STATE)

export const updateStore = (state, action) => state.merge({ ...action.params })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_STORE]: updateStore
})
