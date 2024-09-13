import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageScreen from '../Screens/ImageScreen';
import OptionsScreen from '../Screens/OptionsScreen';
import QuizScreen from '../Screens/QuizScreen';

const Tab = createBottomTabNavigator()

export default function HomeTabs(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator >
                <Tab.Screen name='ImageScreen' component={ImageScreen}/>
                <Tab.Screen name='OptionsScreen' component={OptionsScreen}/>
                <Tab.Screen name='QuizScreen' component={QuizScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}