import { View,Button,Text,ScrollView,StyleSheet,Image} from "react-native";

export default function ImageScreen (){
    const images = [
        { id: 1, uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg' },
        { id: 2, uri: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/urus/2023/model_chooser/urus_s_m.jpg' },
        { id: 3, uri: 'https://cdn-9.motorsport.com/images/amp/63vxpl7Y/s6/ferrari-vision-gran-turismo-1.jpg' },
        { id: 4, uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2015_Lamborghini_Huracan_LP610-4_%2819884965832%29.jpg/1200px-2015_Lamborghini_Huracan_LP610-4_%2819884965832%29.jpg' },
        { id: 5, uri: 'https://imageio.forbes.com/specials-images/imageserve/6552427075f8cabe3a24d6f1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'},
        { id: 6, uri: 'https://cdn.ferrari.com/cms/network/media/img/resize/5d70e7d4ee5f7e58630608ed-d-2.0-812gts-dynamic-focuson?'},
    ];
    return(
        <View style={styles.container}>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
      },
    image: {
      width: 300,
      height: 200,
      margin: 10,
    },
  });