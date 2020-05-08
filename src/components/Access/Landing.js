import React, { useState } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';

const Landing = () => {
	const [transition, setTransition] = useState(false);

	return (
		<div className="landingCon">
			{!transition ? <SignIn setTransition={setTransition} /> : null}
			{transition ? <SignUp setTransition={setTransition} /> : null}
		</div>
	);
};

export default Landing;
