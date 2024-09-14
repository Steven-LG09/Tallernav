import { View,Button,Text,StyleSheet, TextInput } from "react-native";
import React, {useState} from "react";

export default function Home ({navigation}){
    const[texto,setTexto] = useState('')
    
    return(
        <View style={styles.container}>
            <Button title="Pantalla 1" onPress={()=>navigation.navigate("Screen1")}/>
            <Text> </Text>
            <Text>Hay tres parametros permitidos: Persona, Pereira y Mujer</Text>
            <TextInput placeholder="Escriba un parametro"
            value={texto}
            onChangeText={text =>setTexto(text)}/>
            {texto === "Persona"? (
                <Button title="Ir con parametro 'Persona'" onPress={()=>navigation.navigate("Screen1")}/>
            ) : texto === "Pereira" ? (
                <Button title="Ir con parametro 'Pereira'" onPress={()=>navigation.navigate("Screen2")}/>
            ) : texto === "Mujer" ? (
                <Button title="Ir con parametro 'Mujer'" onPress={()=>navigation.navigate("Screen3")}/>
            ) : (
                <Text>Escriba bien el parametro</Text>
            )}
            <Text> </Text>
            <Button title="HomeTabs" onPress={()=> navigation.navigate("HomeTabs")}/>
            <Text> </Text>
            <Button title="Ejercicio adicional" onPress={()=> navigation.navigate("Stack1")}/>
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