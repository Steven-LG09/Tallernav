import { View,Text, Button } from "react-native";

export default function Screen3 ({navigation, route}){
    const{ciudad} =route.params;
    return(
        <View>
            <Text>Pantalla 3</Text>
            <Text>Parametro de la pantalla 2: {ciudad}</Text>
            <Button title="Volver" onPress={()=>navigation.goBack("Screen2")}/>
            <Button title="Reemplazar" onPress={()=>navigation.replace("Home")}/>
            <Button title="Restablecer" onPress={()=>navigation.reset("Screen1")}/>   
        </View>
    );
}