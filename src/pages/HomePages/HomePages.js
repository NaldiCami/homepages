import { React } from "react";
import { View,Text,StyleSheet } from "react-native";

const Home = () => {

    return(

        <View style={styles.container}>
            <Text> Home Page </Text>
        </View>
    )
}
const styles = StyleSheet.create({ // cria o estilo de uma container como imagem e referencia ela na return na <View>
    container: {
        flex: 1,
        justifyContent:'center',
        aliegnItems: 'center',
    }
})

export default Home;