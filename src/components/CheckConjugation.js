import React, { useEffect, useState, useRef } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { useLazyQuery } from '@apollo/react-hooks';

const GET_VERB = gql`
	query Verb($verb: String!) {
		verbList(verb: $verb) {
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
	const [currentVerb, setCurrentVerb] = useState();
	const [verbInput, setVerbInput] = useState({
		vInput: ''
	});

	const [getVerb, { loading, error, data }] = useLazyQuery(GET_VERB);

	useEffect(() => {
		if (data && data.verbList) {
			setCurrentVerb(data.verbList);
		}
	}, [loading]);

	const handleChange = e => {
		setVerbInput({ [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		getVerb({ variables: { verb: `${verbInput.vInput}` } });
		setVerbInput({ vInput: '' });
	};

	if (loading) return 'Loading...';

	console.log(currentVerb);
	return (
		<div>
			<form className="answerForm" onSubmit={handleSubmit}>
				<input
					type="text"
					name="vInput"
					value={verbInput.vInput}
					onChange={handleChange}
				/>
				<button className="answerInputButton">Submit!</button>
			</form>
			{currentVerb ? (
				<div className="conjugations">
					<div className="title">
						<p>Verb: {currentVerb[0].spanishVerb}</p>
						<p>Definition: {currentVerb[0].englishDefinition}</p>
					</div>
					{currentVerb.map((item, idx) => {
						if (
							item.mood === 'Indicativo' &&
							(item.tense === 'Presente' ||
								item.tense === 'Pretérito' ||
								item.tense === 'Imperfecto' ||
								item.tense === 'Futuro' ||
								item.tense === 'Condicional')
						) {
							return (
								<div key={idx}>
									<p>{item.firstPersonSingular}</p>
									<p>{item.secondPersonSingular}</p>
									<p>{item.thirdPersonSingular}</p>
									<p>{item.firstPersonPlural}</p>
									<p>{item.secondPersonPlural}</p>
									<p>{item.thirdPersonPlural}</p>
								</div>
							);
						}
					})}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default CheckConjugation;
