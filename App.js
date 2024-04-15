import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, StatusBar} from "react-native";

import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {

  return(
    <><StatusBar hidden /><RootNavigator /></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})