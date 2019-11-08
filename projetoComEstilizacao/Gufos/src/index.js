import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './pages/main'
import ProfileScreen from './pages/profile'
import SignInScreen from './pages/signin'

// criar a rota de navegacao
const AuthStack = createStackNavigator({ Sign: { screen: SignInScreen } });

const MainNavigator = createBottomTabNavigator(
    {
        Main: {
            screen: MainScreen
        },
        Profile: {
            screen: ProfileScreen
        }
    },
    {
        initialRouteName: 'Main',
        swipeEnabled: false,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            inactiveBackgroundColor: "#B727FF",
            activeBackgroundColor: "#9900e6",
            style: {
                width: '100%',
                height: 50,
            }
        },
    }
);

// export default createAppContainer(MainNavigator)

export default createAppContainer(
    createSwitchNavigator({
        MainNavigator,
        AuthStack
    },
        { initialRouteName: 'AuthStack' }
    )
)