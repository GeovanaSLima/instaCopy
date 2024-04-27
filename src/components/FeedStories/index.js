import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

export default function FeedStories(props) {
    const determineBorder = () => {
        if (props.data.watched) {
            return styles.watchedBorder; // Apply watched border when props.watched is true
        } else if (props.data.storiesType === 'default' ) {
            return styles.defaultBorder;
        } else if (props.data.storiesType === 'closeFriends') {
            return styles.closeFriendsBorder;
        } else {
            return styles.defaultBorder;
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}} style={{ alignItems: 'center' }} >
                <View style={[styles.circle, determineBorder()]}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: props.data.imgProfile }} style={styles.profileImg} />
                    </View>
                </View>
                <Text style={styles.userName} >{props.data.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderColor: '#000',
        height: '100%'
    },
    profileImg: {
        width: 55,
        height: 55,
        borderRadius: 55/2,
    },
    watchedBorder: {
        borderColor: '#cecece',
        borderWidth: 1.5, 
    },
    defaultBorder: {
        borderColor: '#E1306C',
        borderWidth: 2
    },
    closeFriendsBorder: {
        borderColor: '#6DC993',
        borderWidth: 2
    },
    circle: {
        height: 65,
        width: 65,
        borderRadius: 65/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userName: {
        fontSize: 11
    }
});
