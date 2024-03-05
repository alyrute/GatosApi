import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackGatos from './StackGatos'
import StackFavoritos from './StackFavoritos'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text } from 'react-native'

const Tab = createBottomTabNavigator()

export default function Menu() {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name='Gatos'
            component={StackGatos}
            options={{
                tabBarIcon: ( { size, color })=>{
                    return(
                        <Text>Gatos</Text>
                    )
                }
            }}
        />
        <Tab.Screen
            name='Favoritos'
            component={StackFavoritos}
            options={{
                tabBarIcon: ( { size, color })=>{
                    return(
                        <Text>Favoritos</Text>
                    )
                }
            }}
        />
    </Tab.Navigator>
  )
}
