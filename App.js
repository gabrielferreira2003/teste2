import React from 'react';
import Home from './Views/Home';
import Perfil from './Views/Perfil';
import ajuda from './Views/ajuda';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigation = createBottomTabNavigator({
  Home: {screen: Home},
  Perfil: {screen: Perfil},
  ajuda: {screen: ajuda},
},
{
  initialRouteName: 'ajuda'
}
);
const App = createAppContainer(TabNavigation);
export default (App);
