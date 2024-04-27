import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export default function PostHeader() {

    return(
        <View style={styles.header}>
            
            <TouchableOpacity>
                <Image
                source={require('../../img/base/arrow-left.png')}
                style={styles.logo}
                />
            </TouchableOpacity>

            <View>
                <Text style={styles.header}>
                    Explore
                </Text>
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
        justifyContent: 'space-between',
        paddingHorizontal: 15,
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