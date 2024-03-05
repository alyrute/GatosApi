import React from 'react'
import { Text } from 'react-native'
import GatosScreen from '../screen/GatosScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GatosDetail from '../detail/GatosDetail'

const GatosStack = createNativeStackNavigator()

export default function StackGatos() {
    return (
        <GatosStack.Navigator>
            <GatosStack.Screen
                name='GatosScreen'
                component={GatosScreen}
            />
            <GatosStack.Screen
                name='GatosDetail'
                component={GatosDetail}
            />
        </GatosStack.Navigator>
    )
}
