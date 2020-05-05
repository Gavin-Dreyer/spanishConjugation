import React, { useEffect, useState, useRef } from 'react';
import { TweenMax, Linear, Bounce, Back, Cubic, Quart } from 'gsap';

const SignIn = () => {
	let textElement = useRef(null);
	let mainAli = useRef(null);
	let textBubble = useRef(null);
	let bubbleText = useRef(null);

	const [userInput, setUserInput] = useState({
		username: '',
		password: ''
	});

	useEffect(() => {
		TweenMax.from(mainAli, 1, {
			x: 300,
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
				<div>
					<p
						ref={element => {
							textElement = element;
						}}
					>
						Welcome to The Conjugator!
					</p>
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
			</div>
		</div>
	);
};
export default SignIn;