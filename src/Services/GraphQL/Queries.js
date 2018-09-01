import gql from 'graphql-tag'

// Here is example query to Github's GraphQL api that returns first 50 repos, excluding forks, ordered from latest to oldest

export const LIST_REPOS_QUERY = gql`
  query {
    repositoryOwner(login:"andreystarkov") {
      repositories(first: 50, isFork: false, privacy: PUBLIC, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`
