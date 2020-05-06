import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateRoute from './components/Auth/PrivateRoute';
import Conjugator from './components/Conjugator/Conjugator';
import CheckConjugation from './components/CheckConjugation/CheckConjugation';
import SignIn from './components/Access/SignIn';
import SignUp from './components/Access/SignUp';
import './App.css';
import './sass/SignIn.scss';

const client = new ApolloClient({
	uri: 'http://localhost:5555/graphql'
});

function App(props) {
	const appState = useSelector(state => state);

	console.log(appState);
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Route exact path="/" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				<PrivateRoute path="/practice" component={Conjugator} />
				<PrivateRoute path="/conjugations" component={CheckConjugation} />
			</div>
		</ApolloProvider>
	);
}

export default App;
