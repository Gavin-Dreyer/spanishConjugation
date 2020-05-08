import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../actions/accountActions';

const SignUp = props => {
	const dispatch = useDispatch();
	const error = useSelector(state => state.error);

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

	const handleTransition = () => {
		props.setTransition(false);
	};

	return (
		<div className="mainSign">
			<nav>
				<a className="logo" href="/">
					Conjugator
				</a>
				<button onClick={() => handleTransition()}>Sign In</button>
			</nav>
			{error ? error.data.message : ''}
			<p>Sign up to get started!</p>
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

					<button onSubmit={handleSubmit}>Sign Up</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
