import React from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from "react-native";

import FeedHeader from "../components/FeedHeader";
import FeedPosts from "../components/FeedPosts";
import FeedStories from "../components/FeedStories";
import { feed } from "../data/feedData";
import { stories } from "../data/storiesData";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <FeedHeader />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <FlatList
          data={stories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FeedStories data={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ height: 100 }}
        />

        <FlatList
          data={feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FeedPosts data={item} />}
          showsVerticalScrollIndicator={false}
        />
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
    justifyContent: 'center'
  }
})
