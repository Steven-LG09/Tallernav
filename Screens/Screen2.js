import { View,Button,Text, StyleSheet} from "react-native";

export default function Screen2 ({navigation,route}){
    const {dato=""} =route.params || {};
    const ciudad = "Pereira"
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla 2</Text>
            <Text>Parametro de la pantalla 1: {dato}</Text>
            <Button title="Ir a Pantalla 3" onPress={()=>navigation.navigate("Screen3",{ciudad})}/>
            <Text>Parametro de esta pantalla: {ciudad}</Text>
            <Button title="Reemplazar Pantalla" onPress={()=>navigation.replace("Home")}/>
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