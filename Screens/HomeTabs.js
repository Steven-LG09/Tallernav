import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageScreen from '../Screens/ImageScreen';
import OptionsScreen from '../Screens/OptionsScreen';
import QuizScreen from '../Screens/QuizScreen';

const Tab = createBottomTabNavigator()

export default function HomeTabs(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconPath;
        
                  if (route.name === 'ImageScreen') {
                    iconPath = focused
                      ? require('../assets/Image-active.png')
                      : require('../assets/Image-inactive.png');
                  } else if (route.name === 'OptionsScreen') {
                    iconPath = focused
                      ? require('../assets/options-active.png')
                      : require('../assets/options-inactive.png');
                  } else if (route.name === 'QuizScreen') {
                    iconPath = focused
                      ? require('../assets/quiz-active.png')
                      : require('../assets/quiz-inactive.png');
                  }
        
                  return <Image source={iconPath} style={{ width: size, height: size}} />;
                },
                tabBarStyle: {
                    paddingHorizontal: 20,
                    height: 60,
                }
              })}>
                <Tab.Screen name="ImageScreen" component={ImageScreen}/>
                <Tab.Screen name='OptionsScreen' component={OptionsScreen}/>
                <Tab.Screen name='QuizScreen' component={QuizScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}