import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/home';
import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';
import ImageScreen from './components/ImageScreen';
import OptionsScreen from './components/OptionsScreen';
import QuizScreen from './components/QuizScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator iinitialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Screen1' component={Screen1}/>
        <Stack.Screen name='Screen2' component={Screen2}/>
        <Stack.Screen name='Screen3' component={Screen3}/>
      </Stack.Navigator>
      <Tab.Navigator iinitialRouteName='Home'>
        <Tab.Screen name='ImageScreen' component={ImageScreen}/>
        <Tab.Screen name='OptionsScreen' component={OptionsScreen}/>
        <Tab.Screen name='QuizScreen' component={QuizScreen}/>
      </Tab.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});