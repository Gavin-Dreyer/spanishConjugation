import axios from 'axios';

export const ACCOUNT_FETCH = 'ACCOUNT_FETCH';
export const ACCOUNT_SUCCESS = 'ACCOUNT_SUCCESS';
export const ACCOUNT_FAILURE = 'ACCOUNT_FAILURE';

export const fetchLogin = (user, history) => dispatch => {
	dispatch({ type: ACCOUNT_FETCH });
	axios
		.post('http://localhost:4444', user)
		.then(res => {
			dispatch({ type: ACCOUNT_SUCCESS, payload: res.data });
			history.push('/practice');
		})
		.catch(err => dispatch({ type: ACCOUNT_FAILURE, payload: err }));
};
