import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";

import Header from "../components/Header";
import List from "../components/List";
import TabBar from "../components/TabBar";
import { feed } from "../data/feedData";

export default function Home() {

  return(
    <View style={StyleSheet.container}>

      <Header/>

      <FlatList 
      data={feed}
      keyExtractor={ (item) => item.id }
      renderItem={ ({ item }) => <List data={item} /> }
      showsVerticalScrollIndicator={false}
      />

      <TabBar />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})