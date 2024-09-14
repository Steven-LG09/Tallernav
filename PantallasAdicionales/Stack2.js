import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cuatro from './Cuatro';

const Stack = createNativeStackNavigator()

export default function Stack2() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator iinitialRouteName='|'>
        <Stack.Screen name='|' component={Cuatro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}