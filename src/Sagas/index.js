import { takeLatest, all } from 'redux-saga/effects'

// import ApolloClient from 'apollo-boost'
import Api from 'Services/Api'

import { StartupTypes } from 'Stores/StartupStore'
import { startup } from './StartupSagas'

const api = Api.create()

// Here comes your graphql client setup
// const client = new ApolloClient({
//   uri: 'http://localhost:8080/graphql'
// })

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup, api)
  ])
}
