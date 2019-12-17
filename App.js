import React from 'react';
import Home from './Views/Home';
import  Perfil from './Views/Perfil';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
    Home: {screen: Home},
    Perfil: {screen: Perfil},
  },
  {
    initialRouteName: 'Home'
  } 
);
const App = createAppContainer(TabNavigator);
export default App;

