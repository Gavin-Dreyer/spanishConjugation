import React, { useEffect, useState, useRef } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getVerbQuery = gql`
	{
		verbList(verb: "abandonar") {
			spanishVerb
			tense
			mood
			englishDefinition
			firstPersonSingular
			secondPersonSingular
			thirdPersonSingular
			firstPersonPlural
			secondPersonPlural
			thirdPersonPlural
		}
	}
`;

const CheckConjugation = props => {
	const [verb, setVerb] = useState({
		verbInput: ''
	});

	const handleChange = e => {
		setVerb({ [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		// dispatchQuery(verb.verbInput);
		setVerb({ verbInput: '' });
	};

	console.log(props);
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

export default graphql(getVerbQuery)(CheckConjugation);
