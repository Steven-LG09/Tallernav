import { View,Button,Text,ScrollView,StyleSheet } from "react-native";

export default function ImageScreen ({navigation}){
    const images = [
        { id: 1, uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg' },
        { id: 2, uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2023/model_chooser/urus_s_m.jpg' },
        { id: 3, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb-IrDsgtyv9lkPCcvbEfS3-dt8e8-ZakPg&s' },
        { id: 4, uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2015_Lamborghini_Huracan_LP610-4_%2819884965832%29.jpg/1200px-2015_Lamborghini_Huracan_LP610-4_%2819884965832%29.jpg' },
        { id: 5, uri: ''},
        { id: 6, uri: ''},
    ];
    return(
        <View>
            <ScrollView>
                <Text>ImageScreen</Text>
                {images.map(image => (
                <Image key={image.id} source={{ uri: image.uri }} style={styles.image} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 200,
      margin: 10,
    },
  });