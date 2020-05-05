import React, { useEffect, useState } from 'react';

const SignIn = () => {
	const [userInput, setUserInput] = useState({
		username: '',
		password: ''
	});

	const handleChange = e => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<nav>
				<a className="logo" href="/">
					Conjugator
				</a>
				<a href="/signup">Sign Up</a>
			</nav>
			<div className="signInCon">
				<div className="signIn">
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
				</div>
				<div className="mainAli"></div>
			</div>
		</div>
	);
};
export default SignIn;
