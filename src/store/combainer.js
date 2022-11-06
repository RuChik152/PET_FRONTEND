import userLogin, { userRegisterReducer } from './reducers'
import { combineReducers } from 'redux'

const userReducer = combineReducers({
	userLogin,
	userRegister: userRegisterReducer,
})

export default userReducer
