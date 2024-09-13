import { View,Button,Text } from "react-native";

export default function Screen2 ({navigation,route}){
    const {dato} =route.params;
    return(
        <View>
            <Text>Pantalla 2</Text>
            <Text>Parametro de la pantalla 1: {dato}</Text>
            <Button title="Pantalla 3" onPress={()=>navigation.navigate("Screen3",{ciudad: "Pereira"})}/>
        </View>
    );
}