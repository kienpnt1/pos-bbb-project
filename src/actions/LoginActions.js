import { LOGIN, LOGOUT, CHANGE_LOGIN } from '../actions/Types';

export const login = ({user_name, password}) => {
	return {
		type: LOGIN,
		payload: {
			user_name, password
		}
	}
};


export const loginFormChange = (payload) => {
	return {
		type: CHANGE_LOGIN,
		payload
	}
}