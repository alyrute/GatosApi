import React from 'react';
import { Text, View } from 'react-native';

export default function GatoCard({ item }) {
  return (
    <View>
      <Text>ID: {item._id}</Text>
    </View>
  );
}