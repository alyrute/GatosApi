import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../AppGatitosAPI/assets/header.png')} // Ruta de la imagen de la cabecera
        style={styles.headerImage}
      />
      <Text style={styles.text}>Contenido de la pantalla principal</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: '100%',
    height: 150, // Ajusta la altura según tus necesidades
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
