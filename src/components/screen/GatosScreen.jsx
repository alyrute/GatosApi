import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
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
    <View>
      <FlatList
        data={gatos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleGatoPress(item)}>
            <GatoCard item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
    </View>
  );
}