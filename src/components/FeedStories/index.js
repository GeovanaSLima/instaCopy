import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function FeedStories(props) {

    const determineBorder = () => {
        if (props.watched) {
            return styles.watchedBorder;
        } else {
            if (props.data.storiesType === 'default') {
                return styles.defaultBorder;
            } else if (props.data.storiesType === 'closeFriends') {
                return styles.closeFriendsBorder;
            } else {
                return styles.defaultBorder;
            }
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: props.data.imgProfile}} style={[styles.profileImg, determineBorder()]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    profileImg: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
    },
    watchedBorder: {
        borderColor: '#cecece',
        borderWidth: 3.5,
    },
    defaultBorder: {
        borderColor: '#E1306C',
        borderWidth: 3.5
    },
    closeFriendsBorder: {
        borderColor: '#6DC993',
        borderWidth: 3.5
    }
})