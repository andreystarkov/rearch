
import ApolloClient from 'apollo-boost'

// Here comes your graphql client setup
const client = new ApolloClient({
  headers: { authorization: `Bearer c56a64ec1b98afdf6440b5a1c250066d29475d0a` },
  uri: 'https://api.github.com/graphql'
})

export { client }