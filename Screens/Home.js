import { View,Button,Text } from "react-native";

export default function Home ({navigation}){
    return(
        <View>
            <Button title="Pantalla 1" onPress={()=>navigation.navigate("Screen1")}/>
        </View>
    );
}