import apisauce from 'apisauce'
import ApiConfig from 'Config/Api'

const create = (apiUrl = 'https://api.github.com/') => {
  const config = {
    baseURL: apiUrl,
    headers: {
    },
    timeout: 10000
  }

  const api = apisauce.create(config)

  const setHeader = (name, value) => api.setHeader(name, value)
  const getRepos = (user) => api.get(`users/${user}/repos`)

  return {
    getRepos,
    setHeader
  }
}

export default {
  create
}
