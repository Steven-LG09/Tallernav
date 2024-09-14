import { View,Button,StyleSheet } from "react-native";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stack2 from "./Stack2";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Stack2" component={Stack2} />
      </Stack.Navigator>
    );
  }

export default function Uno({navigation}){
    return(
        <View style={styles.container}>
            <Button title="Pulsar" onPress={()=>navigation.navigate('StackNavigator',{screen: 'Stack2'})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
  });