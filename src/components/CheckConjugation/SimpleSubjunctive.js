import React from 'react';

const SimpleSubjunctive = props => {
	return (
		<div className="conjugationsCon">
			<div className="conjugationsView">
				<p>Subjunctive</p>
				<p>yo</p>
				<p>tú</p>
				<p>él/ella/Ud.</p>
				<p>nosotros</p>
				<p>vosotros</p>
				<p>ellos/ellas/Uds.</p>
			</div>
			{props.currentVerb.map((item, idx) => {
				if (
					item.mood === 'Subjuntivo' &&
					(item.tense === 'Presente' ||
						item.tense === 'Imperfecto' ||
						item.tense === 'Futuro')
				) {
					return (
						<div className="conjugations" key={idx}>
							<p>{item.tense}</p>
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
	);
};

export default SimpleSubjunctive;
