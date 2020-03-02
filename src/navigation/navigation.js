import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'; 
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../components/home/home';
import Account from '../components/account/account';
import Details from '../components/details/details';

const StackNavigator = createStackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    AccountScreen: {
        screen: Account,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    DetailsScreen: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
}, {
    initialRouteName: 'HomeScreen'
})

export const AppContainer = createAppContainer(StackNavigator);
