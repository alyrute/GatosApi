import React, { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import GatosScreen from '../screen/GatosScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GatosDetail from '../detail/GatosDetail'
import SearchBar from '../screen/Shearch';
import { GetGatosByCategoria } from '../../apiService/apiService'

const GatosStack = createNativeStackNavigator()

export default function StackGatos() {
    const [gatos, setGatos] = useState([]);
    const handleSearch = async (text) => {
        const result = await GetGatosByCategoria(text);
        setGatos(result);
    };
    return (
        <GatosStack.Navigator>

            <GatosStack.Screen
                name="Gatos"
                component={GatosScreen}
                initialParams={{ gatos: gatos }}
                options={{
                    headerTitle: () => (
                        <View style={styles.header}>
                            <Image
                                source={require('../../../assets/header2.png')}
                                style={styles.image}
                            />
                            {/* Agrega la barra de búsqueda debajo del encabezado */}
                            <SearchBar placeholder="Buscar Categorias" onChangeText={handleSearch} />
                        </View>
                    ),
                }}
            />
            <GatosStack.Screen name="DetalleGato" component={GatosDetail} />
        </GatosStack.Navigator>
    );
};
const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    image: {
        height: 100,
        borderRadius: 10,
        width: 350,
    },
});
