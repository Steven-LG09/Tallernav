import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tres from './Tres';
import Uno from './Uno';
import Dos from './Dos';

const Tab = createBottomTabNavigator()

export default function Tabs2(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator >
                <Tab.Screen name="1" component={Uno} options={{headerShown: false}}/>
                <Tab.Screen name= '2' component={Tres} options={{headerShown: false}}/>
                <Tab.Screen name='3' component={Dos} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}