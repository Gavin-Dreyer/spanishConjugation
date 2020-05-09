import React, { useState } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';

const Landing = () => {
	const [transition, setTransition] = useState(false);

	return (
		<div className="landingCon">
			{/* {!transition ? (
				<SignIn transition={transition} setTransition={setTransition} />
            ) : null} */}
			<SignIn transition={transition} setTransition={setTransition} />
			{/* {transition ? (
				<SignUp transition={transition} setTransition={setTransition} />
            ) : null} */}
			<SignUp transition={transition} setTransition={setTransition} />
		</div>
	);
};

export default Landing;
