import axios from '../api/axios'
import * as types from './types'

const login = (email, password) => async dispatch => {
	try {
		dispatch({
			type: types.USER_LOGIN_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const { data } = await axios.post(
			'/api/users/login',
			{ email, password },
			config
		)

		dispatch({
			type: types.USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
	} catch (error) {
		dispatch({
			type: types.USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const getNewAccessToken = () => async dispatch => {
	const { data } = await axios.get('/api/users/login/access-token')

	if (data.accessToken) {
		dispatch({
			type: types.USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
	} else dispatch(logout())
}

export const logout = () => async dispatch => {
	await axios.get('/api/users/logout')
	localStorage.removeItem('userInfo')
	dispatch({ type: types.USER_LOGOUT })
}

export const register = dataInput => async dispatch => {
	try {
		dispatch({
			type: types.USER_REGISTER_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		}

		const { data } = await axios.post('/api/users', dataInput, config)

		dispatch({
			type: types.USER_REGISTER_SUCCESS,
			payload: data,
		})

		dispatch({
			type: types.USER_LOGIN_SUCCESS,
			payload: data,
		})

		localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
	} catch (error) {
		dispatch({
			type: types.USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export default login
