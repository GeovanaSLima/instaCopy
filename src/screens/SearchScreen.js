import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from 'react-native-elements';

export default function SearchScreen() {

    return (
        <View>
        <SearchBar
        placeholder="Search"
        onChangeText={(text) => console.log(text)}
        round // Make the corners round
        searchIcon={{ name: 'search', color: '#f50', onPress: () => console.log('hello') }}
    />
    </View>
);
}
