import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TweenMax, Cubic, Quart } from 'gsap';

import { fetchLogin } from '../../actions/accountActions';

const SignIn = props => {
	let textElement = useRef(null);
	let mainAli = useRef(null);
	let textBubble = useRef(null);
	let bubbleText = useRef(null);

	const dispatch = useDispatch();

	const [userInput, setUserInput] = useState({
		username: '',
		password: ''
	});

	useEffect(() => {
		TweenMax.from(mainAli, 1, {
			y: 300,
			opacity: 0,
			scale: 0.5,
			ease: Quart.easeIn,
			delay: 1.2
		});
		TweenMax.from(textBubble, 1, {
			x: 300,
			opacity: 0,
			scale: 0.5,
			ease: Quart.easeIn,
			delay: 1
		});
		TweenMax.from(bubbleText, 1, {
			y: 300,
			opacity: 0,
			scale: 0.5,
			ease: Quart.easeIn,
			delay: 1.3
		});
		TweenMax.from(textElement, 1, {
			x: -300,
			opacity: 0,
			scale: 0.5,
			ease: Cubic.easeIn
		});
	}, []);

	const handleChange = e => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(fetchLogin(userInput, props.history));
	};

	const handleTransition = () => {
		props.setTransition(true);
	};

	return (
		<div className="mainSign">
			<div className="signInCon">
				<div className="logoCon">
					<a
						ref={element => {
							textElement = element;
						}}
						className="logo"
						href="/"
					>
						Conjugator
					</a>
				</div>

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

					<button className="signBtn" onSubmit={handleSubmit}>
						Sign In
					</button>
				</form>
			</div>
			<div className="mainImg">
				<div className="signUp">
					<button className="signBtn" onClick={() => handleTransition()}>
						Sign Up
					</button>
				</div>

				<div className="imageCon">
					<div
						className="textBubble"
						ref={element => {
							textBubble = element;
						}}
					>
						<span
							className="bubbleText"
							ref={element => {
								bubbleText = element;
							}}
						>
							Sign In to get practicing!
						</span>
					</div>
					<div
						className="mainAli"
						ref={element => {
							mainAli = element;
						}}
					></div>
				</div>
			</div>

			{/* <div>Photo by Luke Chesser on Unsplash</div> */}
		</div>
	);
};
export default SignIn;
