import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StackGatos from './StackGatos';
import StackFavoritos from './StackFavoritos';

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='GatosStack'
        component={StackGatos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="cat" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='FavoritosStack'
        component={StackFavoritos}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="favorite-border" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}