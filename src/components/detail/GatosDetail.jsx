
import React from 'react';
import { View, Text } from 'react-native';

export default function GatosDetail({ route }) {
  const { item } = route.params;

  return (
    <View>
      <Text>ID: {item._id}</Text>
      <Text>SIZE: {item.size}</Text>
      <Text>TAGS: {item.tags.join(', ')}</Text>
    </View>
  );
}
