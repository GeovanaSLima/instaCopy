import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import FeedPosts from "../components/FeedPosts";
import PostHeader from "../components/PostHeader";

export default function PostScreen({ route }) {
    const { data } = route.params;

    return(
        <View style={styles.container} >
            
            <PostHeader />

            <FeedPosts data={data} />
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
})