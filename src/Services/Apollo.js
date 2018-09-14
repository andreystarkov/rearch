
import ApolloClient from 'apollo-boost'

// Here comes your graphql client setup
const client = new ApolloClient({
  headers: { authorization: `Bearer 52c2c93f1c1e82106fd7dc1eac553799fd5c28ea` },
  uri: 'https://api.github.com/graphql'
})

export { client }
