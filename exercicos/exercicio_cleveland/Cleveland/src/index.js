import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

// Screens
import MedicosScreen from './pages/medicos';
import EspecialidadesScreen from './pages/especialidades';

class NavigationDrawerExemplo extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Text>Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// configuracoes da tela de médicos
const MedicosStack = createStackNavigator({
  Primeira: {
    screen: MedicosScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Médicos',
      headerLeft: <NavigationDrawerExemplo navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    }),
  },
});

// configuracoes da tela de especialidades
const EspecialidadesStack = createStackNavigator({
  Segunda: {
    screen: EspecialidadesScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Especialidades',
      headerLeft: <NavigationDrawerExemplo navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
    }),
  },
});

// configuracoes da drawer
const DrawerNavigationExemplo = createDrawerNavigator(
  {
    Tela1: {
      screen: MedicosStack,
      navigationOptions: {
        drawerLabel: 'Médicos',
      },
    },
    Tela2: {
      screen: EspecialidadesStack,
      navigationOptions: {
        drawerLabel: 'Especialidades',
      },
    },
  },
  {
    order: ['Tela1', 'Tela2']
  },
);

export default createAppContainer(DrawerNavigationExemplo);
