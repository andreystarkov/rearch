export const fetchReposRequest = (state, action) => {
  return state.merge({
    repos: { loading: true, error: false, errorCode: null, list: state.repos.list }
  })
}

export const fetchReposSuccess = (state, action) => {
  const { list } = action
  return state.merge({
    repos: { loading: false, error: false, list }
  })
}

export const fetchReposError = (state, action) => {
  const { errorCode } = action
  return state.merge({
    repos: { loading: false, error: true, errorCode, list: [] }
  })
}
