import {
  EVENT_REQUEST_STATE,
  EVENT_SUCCESS_STATE,
  EVENT_FAILURE_STATE
} from '../../EventStates'

export const userRegisterRequest = (state) => state.merge({
  register: { ...EVENT_REQUEST_STATE }
})

export const userRegisterSuccess = (state, { temperature }) => state.merge({
  auth: true,
  register: { ...EVENT_SUCCESS_STATE }
})

export const userRegisterFailure = (state, { error }) => state.merge({
  auth: false,
  register: {
    ...EVENT_FAILURE_STATE,
    errorMessage: error
  }
})
