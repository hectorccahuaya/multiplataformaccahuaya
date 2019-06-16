import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import ProfileScreen from './src/screens/Profile';

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
		path: 'home/',
		navigationOptions: {
			title: 'Esta es la Home'
		}
	},
	Details: DetailsScreen,
	Profile: ProfileScreen,
},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Un titulo generico',
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fondWeight: 'bold',
			},
		},
	});
export default createAppContainer(AppNavigator);
