import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TweenMax, Cubic, Quart } from 'gsap';

import { fetchLogin } from '../../actions/accountActions';

const SignIn = props => {
	let textElement1 = useRef(null);

	let mainAli = useRef(null);
	let textBubble = useRef(null);
	let bubbleText = useRef(null);
	let btn1 = useRef(null);
	let btn2 = useRef(null);

	let input1 = useRef(null);
	let input2 = useRef(null);

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
			delay: 1.1
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
			delay: 1.2
		});
		// TweenMax.from(textElement1, 1.5, {
		// 	opacity: -2,
		// 	scale: 0.25,
		// 	ease: Quart.easeIn
		// });
	}, []);

	useEffect(() => {
		if (props.transition) {
			TweenMax.to(mainAli, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeOut
			});
			TweenMax.to(textBubble, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(bubbleText, 1.25, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(textElement1, 1.25, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(btn1, 1.5, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(btn2, 1.5, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(input1, 1.75, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(input2, 1.75, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
		}

		if (!props.transition && props.count > 0) {
			TweenMax.from(mainAli, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeOut
			});
			TweenMax.from(textBubble, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.from(bubbleText, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.from(textElement1, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.from(btn1, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.from(btn2, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.from(input1, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.from(input2, 1, {
				x: 1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
		}
	}, [props.transition]);

	const handleChange = e => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(fetchLogin(userInput, props.history));
	};

	const handleTransition = () => {
		props.transition ? props.setTransition(false) : props.setTransition(true);
		props.setCount(props.count + 1);

		setTimeout(function() {
			props.hide ? props.setHide(false) : props.setHide(true);
			props.bool ? props.setBool(false) : props.setBool(true);
		}, 1500);
	};

	return (
		<div className="mainSign">
			<div className="signInCon" hidden={props.bool ? false : true}>
				<div className="logoCon" hidden={props.bool ? false : true}>
					<a
						hidden={props.bool ? false : true}
						ref={element => {
							textElement1 = element;
						}}
						className="logo"
						href="/"
					>
						Conjugator
					</a>
				</div>

				<form
					className="signIn"
					onSubmit={handleSubmit}
					hidden={props.bool ? false : true}
				>
					<input
						name="username"
						type="text"
						onChange={handleChange}
						placeholder="Username"
						value={userInput.username}
						ref={element => {
							input1 = element;
						}}
						hidden={props.bool ? false : true}
					/>
					<input
						name="password"
						type="password"
						onChange={handleChange}
						placeholder="Password"
						value={userInput.password}
						ref={element => {
							input2 = element;
						}}
						hidden={props.bool ? false : true}
					/>

					<button
						className="signBtn"
						onSubmit={handleSubmit}
						ref={element => {
							btn2 = element;
						}}
						hidden={props.bool ? false : true}
					>
						Sign In
					</button>
				</form>
			</div>
			<div className="mainImg" hidden={props.bool ? false : true}>
				<div className="signUp" hidden={props.bool ? false : true}>
					<button
						className="signBtn"
						onClick={() => handleTransition()}
						hidden={props.bool ? false : true}
						ref={element => {
							btn1 = element;
						}}
					>
						Sign Up
					</button>
				</div>

				<div className="imageCon" hidden={props.bool ? false : true}>
					<div
						hidden={props.bool ? false : true}
						className="textBubble"
						ref={element => {
							textBubble = element;
						}}
					>
						<span
							hidden={props.bool ? false : true}
							className="bubbleText"
							ref={element => {
								bubbleText = element;
							}}
						>
							Sign In to get practicing!
						</span>
					</div>
					<div
						hidden={props.bool ? false : true}
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
