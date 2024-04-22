import React from "react";
import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Image, ScrollView } from "react-native";
import { SearchBar } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

import { searchGrid } from '../data/searchData';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

export default function SearchScreen() {
    const navigation = useNavigation(); // Initialize navigation hook

    const navigateToFeedPosts = (item) => {
        navigation.navigate('Post', { data: item }); // Navigate to FeedPosts screen with item data
    };

    const renderItem = ({ item }) => (
        <View style={styles.gridItem}>
            <TouchableOpacity onPress={() => navigateToFeedPosts(item)}>
                <Image source={item.imgPubli} style={styles.image} resizeMode='cover' />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView>
                <SearchBar
                    placeholder="Search"
                    onChangeText={(text) => console.log(text)}
                    round
                    inputContainerStyle={styles.searchInputContainer}
                    inputStyle={styles.searchInput}
                    containerStyle={styles.searchContainer}
                    lightTheme
                    searchIcon={
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: 5 }} />
                    }
                />

                <View style={styles.imageGrid}>
                    <FlatList
                        data={searchGrid}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        numColumns={3}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFF'
    },
    searchContainer: {
        backgroundColor: '#fff',
        height: 55,
        justifyContent: 'center',
        borderBottomColor: '#fff'
    },
    searchInputContainer: {
        height: 35,
        marginHorizontal: 6,
        borderRadius: 8,
        backgroundColor: '#EFEFEF',
    },
    image: {
        width: Dimensions.get("window").width / 3,
        height: Dimensions.get("window").width / 3,
        margin: 2,
    },
});
