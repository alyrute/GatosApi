import React from 'react'
import { Text, View } from 'react-native'

export default function GatosDetail({route}) {

  const {item} = route.params

  return (
    <View>
       <Text>{item.name}</Text>
    </View>
  )
}
