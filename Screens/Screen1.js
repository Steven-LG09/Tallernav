import { View,Button,Text,StyleSheet} from "react-native";

export default function Screen1 ({navigation}){
    const dato = "persona"
    return(
        <View style={styles.container}>
            <Text style={styles.text}>PANTALLA 1</Text>
            <Button title="Ir a Pantalla 2" onPress={()=>navigation.navigate("Screen2",{dato})}/>
            <Text>Parametro de esta pantalla: {dato}</Text>
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