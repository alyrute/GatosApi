import React from 'react'
import { Text } from 'react-native'
import FavoritosScreen from '../screen/FavoritosScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavoritosDetail from '../detail/FavoritosDetail'

const FavoritosStack = createNativeStackNavigator()

export default function StackFavoritos() {
<<<<<<< HEAD
  return
=======
  return (
    <FavoritosStack.Navigator>
      <FavoritosStack.Screen
        name='FavoritosScreen'
        component={FavoritosScreen}
      />
      <FavoritosStack.Screen
        name='FavoritosDetail'
        component={FavoritosDetail}
      />
    </FavoritosStack.Navigator>
  )
>>>>>>> 1951274567911b48f659538340f36ff5d6ea2ce8
}
