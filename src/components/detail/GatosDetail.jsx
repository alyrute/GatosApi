import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function GatosDetail({ route }) {
  const { item } = route.params;

  return (
    <ImageBackground source={require('../../../img/bg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>ID:</Text>
          <Text>{item._id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>SIZE:</Text>
          <Text>{item.size}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>TAGS:</Text>
          <Text>{item.tags.join(', ')}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semi-transparente para que la imagen de fondo sea visible
    borderRadius: 10,
    margin: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
});