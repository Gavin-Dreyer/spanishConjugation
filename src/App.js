import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateRoute from './components/Auth/PrivateRoute';
import Conjugator from './components/Conjugator/Conjugator';
import CheckConjugation from './components/CheckConjugation/CheckConjugation';
import Landing from './components/Access/Landing';

import './App.css';
import './sass/SignIn.scss';
import './sass/CheckConjugation.scss';
import './sass/Conjugator.scss';

const client = new ApolloClient({
	uri: process.env.REACT_APP_HEROKU_API_GRAPHQL
});

function App(props) {
	const appState = useSelector(state => state);

	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Route exact path="/" component={Landing} />
				<PrivateRoute path="/practice" component={Conjugator} />
				<PrivateRoute path="/conjugations" component={CheckConjugation} />
			</div>
		</ApolloProvider>
	);
}

export default App;
