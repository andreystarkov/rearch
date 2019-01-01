import { Map } from 'immutable'

import { EVENT_DEFAULT_STATE } from '../EventStates'

export const AUTH_INITIAL_STATE = Map({
  auth: false,
  login: EVENT_DEFAULT_STATE,
  regitration: EVENT_DEFAULT_STATE
})
