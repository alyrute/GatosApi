import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackGatos from './StackGatos';
import StackFavoritos from './StackFavoritos';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Menu() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'white', // Cambia el color del texto cuando está seleccionado
                inactiveTintColor: 'gray', // Cambia el color del texto cuando no está seleccionado
            }}
        >
            <Tab.Screen
                name='Gatos'
                component={StackGatos}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="cat" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Favoritos'
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
