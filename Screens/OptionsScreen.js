import { View,Button,Text,StyleSheet } from "react-native";
import FlatList1 from "../Components/Flatlist";

export default function OptionsScreen ({navigation}){
    return(
        <View style={styles.container}>
            <Text>OptionsScreen</Text>
            <FlatList1/>
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