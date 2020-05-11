import React from 'react';

const SimpleIndicative = props => {
	return (
		<div className="conjugationsCon">
			<div className="conjugationsView">
				<p className="mood">Indicative</p>
				<p>yo</p>
				<p>tú</p>
				<p>él/ella/Ud.</p>
				<p>nosotros</p>
				<p>vosotros</p>
				<p>ellos/ellas/Uds.</p>
			</div>
			{props.currentVerb.map((item, idx) => {
				if (
					item.mood === 'Indicativo' &&
					(item.tense === 'Presente' ||
						item.tense === 'Imperfecto' ||
						item.tense === 'Pretérito' ||
						item.tense === 'Condicional' ||
						item.tense === 'Futuro')
				) {
					return (
						<div className="conjugations" key={idx}>
							<p className="tense">{item.tense}</p>
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

export default SimpleIndicative;
