import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Uno from './Uno';
import Dos from './Dos';
import Tres from './Tres';

const Tab = createBottomTabNavigator()

export default function Tabs1(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator >
                <Tab.Screen name="?" component={Uno}/>
                <Tab.Screen name= '¿' component={Dos}/>
                <Tab.Screen name='!' component={Tres}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}