import axios from 'axios';

export const ACCOUNT_FETCH = 'ACCOUNT_FETCH';
export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS';
export const ACCOUNT_FAILURE = 'ACCOUNT_FAILURE';

export const fetchLogin = (user, history) => dispatch => {
	dispatch({ type: ACCOUNT_FETCH });
	axios
		.post('http://localhost:4444/api/user/login', user)
		.then(res => {
			dispatch({ type: ACCOUNT_SUCCESS });
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('user_id', res.data.id);
			history.push('/practice');
		})
		.catch(err => dispatch({ type: ACCOUNT_FAILURE, payload: err.response }));
};

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const signUp = (user, history) => dispatch => {
	dispatch({ type: SIGNUP_REQUEST });

	axios
		.post('http://localhost:4444/api/user/', user)
		.then(res => {
			dispatch({ type: SIGNUP_SUCCESS });
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('user_id', res.data.id);
			history.push('/practice');
		})
		.catch(err => dispatch({ type: SIGNUP_FAILURE, payload: err.response }));
};
