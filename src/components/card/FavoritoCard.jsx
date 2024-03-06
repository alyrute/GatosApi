import React from 'react'
import { Text, View } from 'react-native'

export default function FavoritoCard({item}) {
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}
