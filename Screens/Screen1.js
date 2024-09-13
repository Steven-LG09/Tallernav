import { View,Button,Text } from "react-native";

export default function Screen1 ({navigation}){
    return(
        <View>
            <Text>Pantalla 1</Text>
            <Button title="Pantalla 2" onPress={()=>navigation.navigate("Screen2",{dato: "persona"})}/>
        </View>
    );
}