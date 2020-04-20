import React, { useEffect, useState, useRef } from 'react';

const CheckConjugation = () => {
	const [verb, setVerb] = useState({
		verbInput: ''
	});

	const handleChange = e => {
		setVerb({ [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setVerb({ verbInput: '' });
	};

	return (
		<div>
			<form className="answerForm" onSubmit={handleSubmit}>
				<input
					type="text"
					name="verbInput"
					value={verb.verbInput}
					onChange={handleChange}
				/>
				<button className="answerInputButton">Submit!</button>
			</form>
		</div>
	);
};

export default CheckConjugation;
