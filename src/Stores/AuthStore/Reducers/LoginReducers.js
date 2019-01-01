import {
  EVENT_REQUEST_STATE,
  EVENT_SUCCESS_STATE,
  EVENT_FAILURE_STATE
} from '../../EventStates'

export const userLoginRequest = (state) => state.merge({
  login: { ...EVENT_REQUEST_STATE }
})

export const userLoginSuccess = (state, { temperature }) => state.merge({
  auth: true,
  login: { ...EVENT_SUCCESS_STATE }
})

export const userLoginFailure = (state, { error }) => state.merge({
  auth: false,
  login: {
    ...EVENT_FAILURE_STATE,
    errorMessage: error
  }
})
