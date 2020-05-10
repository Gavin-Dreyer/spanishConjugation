import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TweenMax, Cubic, Quart } from 'gsap';

import { signUp } from '../../actions/accountActions';

const SignUp = props => {
	let textElement2 = useRef(null);
	let btn3 = useRef(null);
	let btn4 = useRef(null);
	let input3 = useRef(null);
	let input4 = useRef(null);

	const dispatch = useDispatch();
	const error = useSelector(state => state.error);

	const [userInput, setUserInput] = useState({
		username: '',
		password: ''
	});

	useEffect(() => {
		TweenMax.from(textElement2, 1, {
			x: -1000,
			opacity: -1,
			scale: 0.5,
			ease: Cubic.easeIn
		});
		TweenMax.from(btn3, 1, {
			x: -1000,
			opacity: -1,
			scale: 0.5,
			ease: Cubic.easeIn
		});
		TweenMax.from(btn4, 1, {
			x: -1000,
			opacity: -1,
			scale: 0.5,
			ease: Cubic.easeIn
		});
		TweenMax.from(input3, 1, {
			x: -1000,
			opacity: -1,
			scale: 0.5,
			ease: Cubic.easeIn
		});
		TweenMax.from(input4, 1, {
			x: -1000,
			opacity: -1,
			scale: 0.5,
			ease: Cubic.easeIn
		});
	}, []);

	useEffect(() => {
		if (!props.transition) {
			TweenMax.to(textElement2, 1, {
				x: -1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(btn3, 1, {
				x: -1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(btn4, 1, {
				x: -1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(input3, 1, {
				x: -1000,
				opacity: -1,
				scale: 0.5,
				ease: Cubic.easeIn
			});
			TweenMax.to(input4, 1, {
				x: -1000,
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
		dispatch(signUp(userInput, props.history));
	};

	const handleTransition = () => {
		props.transition ? props.setTransition(false) : props.setTransition(true);

		setTimeout(function() {
			props.hide ? props.setHide(false) : props.setHide(true);
			props.bool ? props.setBool(false) : props.setBool(true);
		}, 1500);
	};

	console.log(props.hide, props.bool);
	return (
		<div className="mainSign">
			<div className="signInCon" hidden={props.bool ? true : false}>
				<div className="logoCon" hidden={props.bool ? true : false}>
					<a
						hidden={props.bool ? true : false}
						ref={element => {
							textElement2 = element;
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
					hidden={props.bool ? true : false}
				>
					<input
						name="username"
						type="text"
						onChange={handleChange}
						placeholder="Username"
						value={userInput.username}
						ref={element => {
							input3 = element;
						}}
						hidden={props.bool ? true : false}
					/>
					<input
						name="password"
						type="password"
						onChange={handleChange}
						placeholder="Password"
						value={userInput.password}
						ref={element => {
							input4 = element;
						}}
						hidden={props.bool ? true : false}
					/>
					<button
						className="signBtn"
						onSubmit={handleSubmit}
						ref={element => {
							btn4 = element;
						}}
						hidden={props.bool ? true : false}
					>
						Sign In
					</button>
				</form>
			</div>

			<div className="mainImg" hidden={props.bool ? true : false}>
				<div className="signUp" hidden={props.bool ? true : false}>
					<button
						className="signBtn"
						onClick={() => handleTransition()}
						hidden={props.bool ? true : false}
						ref={element => {
							btn3 = element;
						}}
					>
						Sign Up
					</button>
				</div>
			</div>
			{/* {
		error ? error.data.message : '';
	} */}
		</div>
	);
};

export default SignUp;
