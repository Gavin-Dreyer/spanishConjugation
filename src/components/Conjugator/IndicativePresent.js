// Level 1
// no reflexive verbs, no irregular verbs
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchVerbs } from '../../actions';
const IndicativePresent = props => {
	//filters to separate the mood/tense to break up the questions into difficulty

	const [randVerb, setRandVerb] = useState();
	const [randomizedTense, setRandomizedTense] = useState();

	let nonReflexiveVerbs = [];
	let nonIrregularVerbs = [];
	let nonIrregularReflexive = [];

	//populate an array with non reflexive verbs
	props.verbs.forEach(verb => {
		if (verb.spanishVerb.slice(-2) !== 'se') {
			nonReflexiveVerbs.push(verb);
		}
	});

	//populate both an array without irregular verbs and one with neither irregular nor reflexive verbs
	props.verbs.forEach(verb => {
		let verbK = Object.keys(verb).filter((item, index) => index > 4);
		let splitVerb = verb.spanishVerb.split('');
		let splitVerb2 = verb[verbK[0]].split('');
		splitVerb = splitVerb.slice(0, -2).join('');
		splitVerb2 = splitVerb2.slice(0, -1).join('');

		if (splitVerb === splitVerb2 || verb.spanishVerb.slice(-2) === 'se') {
			nonIrregularVerbs.push(verb);
		}
		if (splitVerb === splitVerb2) {
			nonIrregularReflexive.push(verb);
		}
	});

	//randomly choose a verb from the different arrays based on the users choice
	useEffect(() => {
		if (props.verbType.includes('irr') && props.verbType.includes('ref')) {
			setRandVerb(props.verbs[Math.floor(Math.random() * props.verbs.length)]);
		} else if (props.verbType.includes('irr')) {
			setRandVerb(
				nonReflexiveVerbs[Math.floor(Math.random() * nonReflexiveVerbs.length)]
			);
		} else if (props.verbType.includes('ref')) {
			setRandVerb(
				nonIrregularVerbs[Math.floor(Math.random() * nonIrregularVerbs.length)]
			);
		} else {
			//randomly selects a verb from an array of indicative present verbs that are neither irregular nor reflexive
			setRandVerb(
				nonIrregularReflexive[
					Math.floor(Math.random() * nonIrregularReflexive.length)
				]
			);
		}
	}, [props.totalQs || props.isFetching]);

	useEffect(() => {
		if (randVerb) viewPicker(randVerb);
	}, [randVerb]);

	if (!randVerb) {
		return <h2>Loading...</h2>;
	}

	function viewPicker(verb) {
		let verbKey = Object.keys(verb);
		let verbValues = Object.values(verb);

		//this is to filter the values to only include the points of view and their conjugations
		verbKey = verbKey.filter((item, index) => index > 4);
		verbValues = verbValues.filter((item, index) => index > 4);

		let randomizer = Math.floor(Math.random() * verbKey.length);

		//this converts the key asscoiated with the value to a normal string format
		let pOVToString = verbKey[randomizer];
		pOVToString = pOVToString.split('');
		pOVToString = pOVToString.map(item => {
			if (item === item.toUpperCase()) {
				return ' ' + item;
			} else {
				return item;
			}
		});
		pOVToString = pOVToString.map((item, index) => {
			if (index === 0) {
				return item.toUpperCase();
			} else {
				return item;
			}
		});
		pOVToString = pOVToString.join('');
		setRandomizedTense(pOVToString);
		props.setCurrentQ(verbValues[randomizer]);
	}

	return (
		<div className="question">
			Conjugate {randVerb.spanishVerb} in {randomizedTense}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		verbs: state.verbs,
		isFetching: state.isFetching
	};
};
export default connect(mapStateToProps, { fetchVerbs })(IndicativePresent);
