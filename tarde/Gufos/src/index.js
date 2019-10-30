import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import SignInScreen from './pages/signin';

const AuthStack = createStackNavigator({
  Sign: {screen: SignInScreen},
});

// criar a navegacao
const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Main',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeBackgroundColor: '#9900e6',
      inactiveBackgroundColor: '#b727ff',
      style: {
        width: '100%',
        height: 50
      }
    }
  },
);

// container
export default createAppContainer(
  createSwitchNavigator(
    {
      MainNavigator,
      AuthStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);
