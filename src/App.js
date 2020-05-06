import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Conjugator from './components/Conjugator/Conjugator';
import CheckConjugation from './components/CheckConjugation/CheckConjugation';
import SignIn from './components/SignIn';
import './App.css';
import './sass/SignIn.scss';

const client = new ApolloClient({
	uri: 'http://localhost:5555/graphql'
});

function App(props) {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Route exact path="/" component={SignIn} />
				<PrivateRoute path="/practice" component={Conjugator} />
				<PrivateRoute path="/conjugations" component={CheckConjugation} />
			</div>
		</ApolloProvider>
	);
}

export default App;
