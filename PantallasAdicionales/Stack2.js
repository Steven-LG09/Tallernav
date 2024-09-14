import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cuatro from './Cuatro';
import Tabs2 from './Tabs2';

const Stack = createNativeStackNavigator()

export default function Stack2() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator iinitialRouteName='|'>
        <Stack.Screen name='|' component={Cuatro} options={{headerShown: false}}/>
        <Stack.Screen name='#' component={Tabs2} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}