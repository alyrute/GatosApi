import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import GatoCard from '../card/GatoCard'
import { useNavigation } from '@react-navigation/native'
import { GetGatosByCategoria } from '../../apiService/apiService'
import { SearchBar } from 'react-native-elements';


export default function GatosScreen() {
  const [categoria, setCategoria] = useState("cute")
  const [gatos, setGatos] = useState([])
  const navigation = useNavigation()

  const getGatosByCategoria = (categoria) => {
    GetGatosByCategoria(categoria)
      .then(
        setGatos()
      )
  }

  return (
    <View>
      <FlatList
        data={gatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("GatosDetail", { item: item })}
          >
            <GatoCard key={item.id} item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
