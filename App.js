import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screen/BookTransactionScreen';
import SearchScreen from './screen/SearchScreen';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <AppContainer/>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Transaction: { screen: TransactionScreen },
    Search: {screen: SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator);