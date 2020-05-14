// Level 1
// no reflexive verbs, no irregular verbs
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchVerbs } from '../../actions';
const IndicativePresent = props => {
	//filters to seperate the mood/tense to break up the questions into difficulty

	const [randVerb, setRandVerb] = useState();
	const [randomizedTense, setRandomizedTense] = useState();

	//creates an object to check if verb is reflexive
	let checker = indPresent.map(item => {
		let obj = {
			reflexiveCheck: item.spanishVerb,
			spanVerb: item.spanishVerb,
			tense: item.firstPersonSingular
		};

		obj.reflexiveCheck = obj.reflexiveCheck.split('');

		obj.reflexiveCheck = obj.reflexiveCheck.slice(
			obj.reflexiveCheck.length - 2,
			obj.reflexiveCheck.length
		);

		obj.reflexiveCheck = obj.reflexiveCheck.join('');

		return obj;
	});

	//if verb is reflexive, filter it out
	checker = checker.filter(item => {
		if (item.reflexiveCheck !== 'se') {
			return item;
		}
	});

	//create new array with reflexive verbs filtered out
	let nonReflexiveVerbs = [];

	indPresent.forEach(item => {
		for (let i = 0; i < checker.length; i++) {
			if (item.spanishVerb === checker[i].spanVerb) {
				nonReflexiveVerbs = [...nonReflexiveVerbs, item];
			}
		}
	});

	// indPresent.filter((item, index) => {
	//     if (item.spanishVerb.slice(item.spanishVerb.length - 2, item.spanishVerb.length) !== 'se') {
	//         return item
	//     }
	// })

	// filters out reflexive verbs
	let nonIrregularVerbs = indPresent.filter(item => {
		let splitArr = item.spanishVerb.split('');
		let splitArr2 = item.firstPersonSingular.split('');
		splitArr = splitArr.slice(0, splitArr.length - 2);
		splitArr2 = splitArr2.slice(0, splitArr2.length - 1);
		splitArr = splitArr.join('');
		splitArr2 = splitArr2.join('');
		if (
			splitArr === splitArr2 ||
			item.spanishVerb.slice(
				item.spanishVerb.length - 2,
				item.spanishVerb.length
			) === 'se'
		) {
			return item;
		}
	});

	//filters out the irregular verbs from the array that has already been filtered for reflexive
	let nonIrregularReflexive = nonReflexiveVerbs.filter(item => {
		let splitArr = item.spanishVerb.split('');
		let splitArr2 = item.firstPersonSingular.split('');
		splitArr = splitArr.slice(0, splitArr.length - 2);
		splitArr2 = splitArr2.slice(0, splitArr2.length - 1);
		splitArr = splitArr.join('');
		splitArr2 = splitArr2.join('');
		if (splitArr === splitArr2) {
			return item;
		}
	});

	useEffect(() => {
		if (props.verbType.includes('irr') && props.verbType.includes('ref')) {
			setRandVerb(indPresent[Math.floor(Math.random() * indPresent.length)]);
		} else if (props.verbType.includes('irr')) {
			setRandVerb(
				nonReflexiveVerbs[Math.floor(Math.random() * nonReflexiveVerbs.length)]
			);
		} else if (props.verbType.includes('ref')) {
			setRandVerb(
				nonIrregularVerbs[Math.floor(Math.random() * nonIrregularVerbs.length)]
			);
		} else {
			//randomly selects a verb from an array of indictive present verbs that are neither irregular nor reflexive
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
