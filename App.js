import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";

import Header from "./src/components/Header";
import List from "./src/components/List";
import TabBar from "./src/components/TabBar";
import { feed } from "./src/data/feedData";
import Home from "./src/screens/Home";

export default function App() {

  return(
    <View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})