import { View,Button,StyleSheet } from "react-native";

export default function Cuatro({navigation}){
    return(
        <View style={styles.container}>
            <Button title="Pulsar" onPress={()=>navigation.reset({routes: [{name: 'Tabs1'}]})}/>
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