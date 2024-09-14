import { View,Button,StyleSheet,Text } from "react-native";
import React, {useState} from "react";

export default function Tres(){
  const[texto,setTexto]  =useState('')

  const handlePress = () => {
    setTexto('Fin');
  };
    return(
        <View style={styles.container}>
            <Button title="Pulsar" onPress={handlePress}/>
            {texto ? <Text>{texto}</Text> : null}
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