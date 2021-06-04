//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './pages/FirstPage';
import LiveVideo from './pages/FourthPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
const App = createStackNavigator({
    FirstPage: { screen: FirstPage }, 
    SecondPage: { screen: SecondPage }, 
    ThirdPage:{screen:ThirdPage},
    FourthPage:{screen: LiveVideo},
  },
  {
    initialRouteName: 'FirstPage',
  }
);
export default createAppContainer(App);