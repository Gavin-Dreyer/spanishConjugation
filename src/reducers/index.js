import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
import {
	ACCOUNT_FETCH,
	ACCOUNT_SUCCESS,
	ACCOUNT_FAILURE
} from '../actions/accountActions';
import {
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE
} from '../actions/accountActions';

const initialState = {
	verbs: [],
	isFetching: false,
	error: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching: true,
				error: ''
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				error: '',
				verbs: action.payload
			};
		case FETCH_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		case ACCOUNT_FETCH:
			return { ...state, isFetching: true, error: '' };
		case ACCOUNT_SUCCESS:
			return { ...state, isFetching: false };
		case ACCOUNT_FAILURE:
			return { ...state, isFetching: false, error: action.payload };
		case SIGNUP_REQUEST:
			return { ...state, isFetching: true, error: '' };
		case SIGNUP_SUCCESS:
			return { ...state, isFetching: false };
		case SIGNUP_FAILURE:
			return { ...state, isFetching: false, error: action.payload };
		default:
			return state;
	}
};

export default reducer;
