import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../actions/accountActions';

const SignUp = props => {
	const dispatch = useDispatch();

	const [userInput, setUserInput] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(signUp(userInput, props.history));
	};

	return (
		<div className="signInCon">
			<form className="signIn" onSubmit={handleSubmit}>
				<input
					name="username"
					type="text"
					onChange={handleChange}
					placeholder="Username"
					value={userInput.username}
				/>
				<input
					name="password"
					type="password"
					onChange={handleChange}
					placeholder="Password"
					value={userInput.password}
				/>

				<button onSubmit={handleSubmit}>Sign In</button>
			</form>
		</div>
	);
};

export default SignUp;
