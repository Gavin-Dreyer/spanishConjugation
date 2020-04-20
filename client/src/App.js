import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import { connect } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';

import { fetchVerbs } from './actions';

import IndicativePresent from './components/IndicativePresent';
import VerbTypeSelector from './components/VerbTypeSelector';
import CheckConjugation from './components/CheckConjugation';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:5555/graphql'
});

function App(props) {
	const inputElement = useRef(null);

	const [verbType, setVerbType] = useState([]);
	const [answerInput, setAnswerInput] = useState('answerInput');
	const [verbs, setVerbs] = useState();
	const [currentQ, setCurrentQ] = useState();
	const [totalQs, setTotalQs] = useState(0);
	const [answers, setAnswers] = useState({
		answerInput: ''
	});

	useEffect(() => {
		props.fetchVerbs();
	}, []);

	useEffect(() => {
		setVerbs(props.verbs);
	});

	if (!verbs) {
		return <h2>Loading...</h2>;
	}

	const checkAnswer = () => {
		if (answers.answerInput === currentQ) {
			setTotalQs(totalQs + 1);
			setAnswerInput(answerInput + 'Correct');
		} else {
			setAnswerInput(answerInput + 'Incorrect');
		}

		setTimeout(() => {
			setAnswerInput('answerInput');
		}, 1000);
	};

	const handleChange = e => {
		setAnswers({ [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setAnswers({ answerInput: '' });
		checkAnswer();
	};

	function tildes(letter) {
		if (letter === 'á') {
			setAnswers({ answerInput: answers.answerInput + 'á' });
		}
		if (letter === 'é') {
			setAnswers({ answerInput: answers.answerInput + 'é' });
		}
		if (letter === 'í') {
			setAnswers({ answerInput: answers.answerInput + 'í' });
		}
		if (letter === 'ó') {
			setAnswers({ answerInput: answers.answerInput + 'ó' });
		}
		if (letter === 'ú') {
			setAnswers({ answerInput: answers.answerInput + 'ú' });
		}
		if (letter === 'ñ') {
			setAnswers({ answerInput: answers.answerInput + 'ñ' });
		}
		inputElement.current.focus();
	}

	return (
		<ApolloProvider client={client}>
			<div className="App">
				{/* <IndicativePresent
					setCurrentQ={setCurrentQ}
					totalQs={totalQs}
					verbType={verbType}
				/> */}

				<CheckConjugation />

				{/* <div className="totalQs">{totalQs}</div> */}

				{/* <div className="answerFormCon">
					<div className="tildeButtonCon">
						<button className="tildeButton" onClick={() => tildes('á')}>
							á
						</button>
						<button className="tildeButton" onClick={() => tildes('é')}>
							é
						</button>
						<button className="tildeButton" onClick={() => tildes('í')}>
							í
						</button>
						<button className="tildeButton" onClick={() => tildes('ñ')}>
							ñ
						</button>
						<button className="tildeButton" onClick={() => tildes('ó')}>
							ó
						</button>
						<button className="tildeButton" onClick={() => tildes('ú')}>
							ú
						</button>
					</div>

					<form className="answerForm" onSubmit={handleSubmit}>
						<input
							type="text"
							name="answerInput"
							className={`${answerInput}`}
							value={answers.answerInput}
							onChange={handleChange}
							ref={inputElement}
						/>
						<button className="answerInputButton">Submit!</button>
					</form>
				</div> */}

				{/* <VerbTypeSelector verbType={verbType} setVerbType={setVerbType} /> */}
			</div>
		</ApolloProvider>
	);
}

const mapStateToProps = state => {
	return {
		verbs: state.verbs,
		isFetching: state.isFetching
	};
};
export default connect(mapStateToProps, { fetchVerbs })(App);
