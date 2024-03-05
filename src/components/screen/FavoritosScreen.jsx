import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import FavoritoCard from '../card/FavoritoCard'

const favoritos = [
  {
    id: 1,
    name: "Gatito numero 1 FAV"
  },
  {
    id: 2,
    name: "Gatillo numero 2 FAV"
  },
  {
    id: 3,
    name: "Gatin numero 3 FAV"
  }
]

export default function FavoritosScreen() {

  const navigation = useNavigation()

  return (
    <View>
      <FlatList
        data={favoritos}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={( {item} ) => (
          <TouchableOpacity
            onPress={()=> navigation.navigate("FavoritosDetail", {item: item})}
          >
            <FavoritoCard key={item.id} item={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
