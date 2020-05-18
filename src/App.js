import React from 'react';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/auth';
import {serverUrl} from './utils/hosts';

const httpLink = createHttpLink({
	uri: `${serverUrl}/graphql`,
});

const authLink = setContext(async (_, {headers}) => {
	// get the authentication token from local storage if it exists
	const token = await AsyncStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Basic ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const Stack = createStackNavigator();

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login">
					<Stack.Screen name="Login" component={Login} />
				</Stack.Navigator>
			</NavigationContainer>
		</ApolloProvider>
	);
}
