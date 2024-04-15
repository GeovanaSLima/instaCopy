import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";

import FeedHeader from "../components/FeedHeader";
import FeedPosts from "../components/FeedPosts";
import { feed } from "../data/feedData";

export default function HomeScreen() {

  return(
    <View style={StyleSheet.container}>

      <FeedHeader/>

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
    flex: 1
  },
})