import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import BlueScreen from "./BlueScreen";




const GreenTab = createStackNavigator({
    Green: BlueScreen
});

const RedTab = createStackNavigator({
    Red: BlueScreen
});

const Tabs = createBottomTabNavigator({
    Green: GreenTab,
    Red: RedTab
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: () => {
            const { routeName } = navigation.state;
            let tabName;
            tabName = routeName === 'Green' ? 'home' : 'grid';

            return <Icon name={tabName} size={20} />
        }
    })
});

export default createAppContainer(Tabs);