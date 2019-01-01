import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  userLogin: ['params'],
  userRegister: ['params'],
  userRegisterSuccess: ['user'],
  userRegisterFailure: ['error'],
  userLoginSuccess: ['user'],
  userLoginFailure: ['error'],
})

export const AuthTypes = Types
export default Creators
