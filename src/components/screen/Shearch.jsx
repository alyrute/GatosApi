import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ placeholder, onChangeText }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (text) => {
        setSearchValue(text);
        onChangeText(text);
    };

    return (
        <View style={styles.container}>
            <Ionicons name="search" size={24} color="black" />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={searchValue}
                onChangeText={handleInputChange}
            />
        </View>
    );
};

{ hello dfdsfdsfs }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
});

export default SearchBar;