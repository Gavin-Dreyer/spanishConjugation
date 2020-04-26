import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route } from 'react-router-dom';

import Conjugator from './components/Conjugator/Conjugator';
import CheckConjugation from './components/CheckConjugation/CheckConjugation';
import SignIn from './components/SignIn';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:5555/graphql'
});

function App(props) {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Route exact path="/" component={SignIn} />
				<Route exact path="/practice" component={Conjugator} />
				<Route path="/conjugations" component={CheckConjugation} />
			</div>
		</ApolloProvider>
	);
}

export default App;
