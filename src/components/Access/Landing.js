import React, { useState } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';

const Landing = props => {
	const [bool, setBool] = useState(true);
	const [hide, setHide] = useState(false);
	const [transition, setTransition] = useState(false);
	const [count, setCount] = useState(0);

	return (
		<div className="landingCon">
			{!hide ? (
				<SignIn
					bool={bool}
					setBool={setBool}
					hide={hide}
					setHide={setHide}
					transition={transition}
					setTransition={setTransition}
					count={count}
					setCount={setCount}
					history={props.history}
				/>
			) : null}
			{hide ? (
				<SignUp
					bool={bool}
					setBool={setBool}
					hide={hide}
					setHide={setHide}
					transition={transition}
					setTransition={setTransition}
					history={props.history}
				/>
			) : null}
		</div>
	);
};

export default Landing;
