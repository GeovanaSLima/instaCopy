import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";

import FeedHeader from "../components/FeedHeader";
import FeedPosts from "../components/FeedPosts";
import FeedStories from "../components/FeedStories";
import { feed } from "../data/feedData";
import { stories } from "../data/storiesData";

export default function HomeScreen() {

  return(
    <View style={StyleSheet.container}>

      <FeedHeader/>

      <FlatList
      data={stories}
      keyExtractor={ (item) => item.id }
      renderItem={ ({ item }) => <FeedStories data={item} /> }
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      />

      <FlatList 
      data={feed}
      keyExtractor={ (item) => item.id }
      renderItem={ ({ item }) => <FeedPosts data={item} /> }
      showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
})