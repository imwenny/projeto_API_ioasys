import React from 'react';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Screens from './screens';

const showHeader=false
const RootStack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name="Login" component={Screens.Login} options={{headerShown:false}}/>
        <RootStack.Screen name="Enterprise" component={Screens.Enterprise} options={{headerShown:false}}/>
        <RootStack.Screen name="Search" component={Screens.Search} options={{headerShown:false}}/>

      </RootStack.Navigator>
    </NavigationContainer>
  );
}

