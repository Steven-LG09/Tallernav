import { View,Button,Text ,StyleSheet} from "react-native";

export default function AditionalScreen ({navigation}){
    return(
        <View style={styles.container}>
            <Text>Navege hasta encontrar la palabra fin</Text>
            <Button title="Comenzar" onPress={()=>navigation.navigate("Tabs1")}/>
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