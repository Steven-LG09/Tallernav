import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AditionalScreen from './AditionalScreen';
import Tabs1 from './Tabs1';

const Stack = createNativeStackNavigator()

export default function Stack1() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator iinitialRouteName='AditionalScreen'>
        <Stack.Screen name='AditionalScreen' component={AditionalScreen}/>
        <Stack.Screen name='Tabs1' component={Tabs1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}