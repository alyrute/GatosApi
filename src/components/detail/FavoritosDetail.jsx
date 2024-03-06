import React from 'react'
import { Text, View } from 'react-native'

<<<<<<< HEAD
export default function FavoritosDetail({ route }) {

  const { item } = route.params

  return (
    <View>
      <Text>{item.name}</Text>
=======
export default function FavoritosDetail({route}) {

  const {item} = route.params

  return (
    <View>
       <Text>{item.name}</Text>
>>>>>>> 1951274567911b48f659538340f36ff5d6ea2ce8
    </View>
  )
}
