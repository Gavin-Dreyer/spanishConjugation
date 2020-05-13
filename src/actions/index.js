import AxiosWithAuth from '../components/Auth/AxiosWithAuth';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchVerbs = history => dispatch => {
	dispatch({ type: START_FETCHING });
	AxiosWithAuth()
		.get(`${process.env.REACT_APP_HEROKU_API}/api/tense/`)
		.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
		.catch(err => {
			dispatch({ type: FETCH_FAILURE, payload: err.response });
			if (history) {
				return err.response.status === 401 ? history.push('/') : null;
			}
		});
};
