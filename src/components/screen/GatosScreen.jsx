import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import GatoCard from '../card/GatoCard'
import { useNavigation } from '@react-navigation/native'

const gatos = [
  {
    id: 1,
    name: "Gatito numero 1"
  },
  {
    id: 2,
    name: "Gatillo numero 2"
  },
  {
    id: 3,
    name: "Gatin numero 3"
  }
]

export default function GatosScreen() {

  const navigation = useNavigation()

  return (
    <View>
      <FlatList
        data={gatos}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={( {item} ) => (
          <TouchableOpacity
            onPress={()=> navigation.navigate("GatosDetail", {item: item})}
          >
            <GatoCard key={item.id} item={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
