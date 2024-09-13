import { ImageComponent, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';
import HomeTabs from './Screens/HomeTabs';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator iinitialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Screen1' component={Screen1}/>
        <Stack.Screen name='Screen2' component={Screen2}/>
        <Stack.Screen name='Screen3' component={Screen3}/>
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}