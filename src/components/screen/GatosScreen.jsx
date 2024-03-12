import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GetGatosByCategoria } from '../../apiService/apiService';
import GatoCard from '../card/GatoCard';

export default function GatosScreen() {
  const [gatos, setGatos] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { categoria } = route.params;

  useEffect(() => {
    obtenerGatosPorCategoria();
  }, [categoria]);

  const obtenerGatosPorCategoria = async () => {
    try {
      const gatosData = await GetGatosByCategoria(categoria);
      setGatos(gatosData);
    } catch (error) {
      console.error('Error al obtener gatos por categoría:', error);
    }
  };

  const handleGatoPress = (item) => {
    navigation.navigate("GatosDetail", { item: item });
  };

  return (
    <ImageBackground source={require('../../../img/bg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <FlatList
          data={gatos}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleGatoPress(item)}>
              <View style={styles.itemContainer}>
                <GatoCard item={item} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: '#F0F0F0', // Color de fondo más claro
    borderRadius: 12,
    borderWidth: 2, // Grosor del borde
    borderColor: '#CCCCCC', // Color del borde
    elevation: 2, // Para sombra en Android
    shadowColor: '#000', // Para sombra en iOS
    shadowOffset: { width: 0, height: 2 }, // Para sombra en iOS
    shadowOpacity: 0.25, // Para sombra en iOS
    shadowRadius: 4, // Para sombra en iOS
    padding:10,
  },
});