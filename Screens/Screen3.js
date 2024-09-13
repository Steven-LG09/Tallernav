import { View,Text, Button,StyleSheet } from "react-native";

export default function Screen3 ({navigation, route}){
    const{ciudad=""} =route.params || {};
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla 3</Text>
            <Text>Parametro de la pantalla 2: {ciudad}</Text>
            <Button title="Volver a la Pantalla anterior" onPress={()=>navigation.goBack()}/>
            <Button title="Restablecer Pila" onPress={()=>navigation.reset({routes: [{name: 'Screen1'}]})}/>   
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
    text: {
        color: 'red',
        fontSize: 30,
    }
});