import { useNavigation, useIsFocused } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export default function PostHeader() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const goToSearchScreen = () => {
        if (!isFocused) {
            navigation.navigate('Search');
        }
    };

    return(
        <View style={styles.header}>
            
            <TouchableOpacity onPress={goToSearchScreen} >
                <Image
                source={require('../../img/base/arrow-left.png')}
                style={styles.logo}
                />
            </TouchableOpacity>

            <View>
                <Text style={styles.headerTitle}>Explore</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 55,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    logo: {
        width: 35,
        height: 35
    },
    headerTitle: {
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
        marginLeft: 30
    },
    like: {
        width: 23,
        height: 23,
        marginRight: 12
    },
    send: {
        width: 23,
        height: 23
    },
    socialBtnView: {
        flexDirection: 'row'
    },
})
