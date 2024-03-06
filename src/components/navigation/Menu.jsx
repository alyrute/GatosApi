import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackGatos from './StackGatos'
import StackFavoritos from './StackFavoritos'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, Image, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function Menu() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Gatos'
                component={StackGatos}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <FontAwesome5 name="cat" size={24} color="black" />
                        )
                    }
                }}
            />
            <Tab.Screen
                name='Favoritos'
                component={StackFavoritos}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <MaterialIcons name="favorite-border" size={24} color="black" />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        paddingTop: 20,
    },
});