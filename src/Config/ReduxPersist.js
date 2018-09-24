import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'
import storage from 'redux-persist/lib/storage'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage,
    // blacklist: [],
    whitelist: ['main'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
