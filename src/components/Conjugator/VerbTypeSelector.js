import React, { useState, useEffect } from 'react';

const VerbTypeSelector = props => {
	const [selectedIrr, setSelectedIrr] = useState();
	const [selectedRef, setSelectedRef] = useState();

	const typeSelector = word => {
		if (props.verbType.includes(word)) {
			props.setVerbType(props.verbType.filter(item => item !== word));
		} else {
			props.setVerbType([...props.verbType, word]);
		}
	};

	useEffect(() => {
		if (props.verbType.includes('irr')) {
			setSelectedIrr('selectedIrr');
		} else if (!props.verbType.includes('irr')) {
			setSelectedIrr('');
		}

		if (props.verbType.includes('ref')) {
			setSelectedRef('selectedRef');
		} else if (!props.verbType.includes('ref')) {
			setSelectedRef('');
		}
	}, [props.verbType]);

	return (
		<div className="verbTypes">
			<button
				className={`${selectedRef} selBut`}
				onClick={() => typeSelector('ref')}
			>
				Include reflexive verbs
			</button>
			<button
				className={`${selectedIrr} selBut`}
				onClick={() => typeSelector('irr')}
			>
				Include irregular verbs
			</button>
		</div>
	);
};

export default VerbTypeSelector;
