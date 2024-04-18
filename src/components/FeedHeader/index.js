import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";

export default function FeedHeader() {
    return(
        <View style={styles.header}>
            
            <TouchableOpacity>
                <Image
                source={require('../../img/base/logo.png')}
                style={styles.logo}
                />
            </TouchableOpacity>

            <View style={styles.socialBtnView} >
                <TouchableOpacity>
                    <Image
                    source={require('../../img/base/like.png')}
                    style={styles.like}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../../img/base/messages.png')}
                    style={styles.send}
                    />
                </TouchableOpacity>

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