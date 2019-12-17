export const fetchRequest = (state, action) => {
  return state.merge({
    data: { loading: true, error: false, errorCode: null }
  })
}

export const fetchSuccess = (state, action) => {
  const { list } = action
  return state.merge({
    data: { loading: false, error: false, list }
  })
}

export const fetchError = (state, action) => {
  const { error } = action
  console.log({ error })
  return state.merge({
    data: { loading: false, error, list: [] }
  })
}
