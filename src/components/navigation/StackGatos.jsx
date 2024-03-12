import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriasScreen from '../screen/CategoriasScreen';
import GatosScreen from '../screen/GatosScreen';
import GatosDetail from '../detail/GatosDetail';

const Stack = createNativeStackNavigator();

export default function StackGatos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoriasScreen" component={CategoriasScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GatosScreen" component={GatosScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GatosDetail" component={GatosDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}