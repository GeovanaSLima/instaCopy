import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import FeedPosts from "../components/FeedPosts";
import PostHeader from "../components/PostHeader";

export default function PostScreen({ route }) {
    const { data } = route.params;

    return(
        <View style={styles.container} >
            <PostHeader />
            <ScrollView style={styles.scrollViewContent}>
                <FeedPosts data={data} />
            </ScrollView>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    scrollViewContent: {
        flex: 1
    }
})
