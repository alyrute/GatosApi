import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetCategorias } from '../../apiService/apiService';
import imagen1 from '../../../img/1.png';
import imagen2 from '../../../img/2.png';
import imagen3 from '../../../img/3.png';

const windowWidth = Dimensions.get('window').width;

export default function CategoriasScreen() {
  const [categorias, setCategorias] = useState([]);
  const [randomImageIndices, setRandomImageIndices] = useState({}); // Estado para almacenar los índices de imagen aleatorios

  const navigation = useNavigation();

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = async () => {
    try {
      const categoriasData = await GetCategorias();
      const randomIndices = categoriasData.reduce((indices, categoria) => {
        return { ...indices, [categoria]: Math.floor(Math.random() * 3) + 1 };
      }, {});
      setCategorias(categoriasData);
      setRandomImageIndices(randomIndices);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
    }
  };

  const handleCategoriaPress = (categoria) => {
    navigation.navigate('GatosScreen', { categoria });
  };

  return (
    <View>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoriaPress(item)}>
            <View style={styles.categoriaContainer}>
              <Image
                source={
                  randomImageIndices[item] === 1 ? imagen1 : 
                  randomImageIndices[item] === 2 ? imagen2 : 
                  imagen3
                }
                resizeMode="contain" // Hacer que la imagen se adapte bien al tamaño de la caja
                style={styles.image}
              />
              <Text style={styles.categoriaText}>{item}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  
  categoriaContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth / 2 - 20,
    height: 150,
    margin: 10,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%', // Ajustar la altura de la imagen para que se vea bien en la caja
  },
  categoriaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
});
