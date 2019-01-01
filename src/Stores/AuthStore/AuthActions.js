import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  userRegisterRequest: ['params'],
  userRegisterSuccess: ['user'],
  userRegisterFailure: ['error'],
  userLoginRequest: ['params'],
  userLoginSuccess: ['user'],
  userLoginFailure: ['error']
})

export const AuthTypes = Types
export default Creators
