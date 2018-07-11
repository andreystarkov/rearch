import apisauce from 'apisauce'
import ApiConfig from 'Config/Api'

const create = (apiUrl) => {
  const config = {
    baseURL: apiUrl || ApiConfig.baseUrl,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  }

  const api = apisauce.create(config)

  // configuration methods

  const setHeader = (name, value) => api.setHeader(name, value)

  // get methods
  //
  // const getSome = (some) => api.get('some/method', { some })

  return {
    setHeader
  }
}

export default {
  create
}
