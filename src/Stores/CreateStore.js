import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import Rehydration from 'Services/Rehydration'
import ReduxPersist from 'Config/ReduxPersist'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  enhancers.push(composeEnhancers(applyMiddleware(...middleware)))

  const createAppropriateStore = createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  let sagasManager = sagaMiddleware.run(rootSaga)
  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
