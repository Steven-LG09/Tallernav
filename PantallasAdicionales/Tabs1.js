import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Uno from './Uno';
import Dos from './Dos';
import Stack2 from './Stack2';

const Tab = createBottomTabNavigator()

export default function Tabs1(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator >
                <Tab.Screen name="1" component={Uno} options={{headerShown: false}}/>
                <Tab.Screen name= '2' component={Dos} options={{headerShown: false}}/>
                <Tab.Screen name='3' component={Stack2} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}