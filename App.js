import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";

import Header from "./src/Header";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      nome: 'Geovana Sousa', 
      imgProfile: 'https://raw.githubusercontent.com/GeovanaSLima/GeovanaSLima/main/GitProfile.png',
      imgPubli: 'src/img/publis/publi_1.jpg', 
      description: 'Ontem demorei para dormir, tava meio assim sla...',
      liked: true,
      likers: 1
    },
    {
      id: '2', 
      nome: 'Geovana Sousa', 
      imgProfile: 'https://raw.githubusercontent.com/GeovanaSLima/GeovanaSLima/main/GitProfile.png',
      imgPubli: 'src/img/publis/publi_2.jpg', 
      description: 'O meu lugar...',
      liked: true,
      likers: 1
    },
    {
      id: '3', 
      nome: 'Geovana Sousa', 
      imgProfile: 'https://raw.githubusercontent.com/GeovanaSLima/GeovanaSLima/main/GitProfile.png',
      imgPubli: 'src/img/publis/publi_3.jpg', 
      description: 'Deixa eu te amar...',
      liked: true,
      likers: 1
    },
    {
      id: '4', 
      nome: 'Geovana Sousa', 
      imgProfile: 'https://raw.githubusercontent.com/GeovanaSLima/GeovanaSLima/main/GitProfile.png',
      imgPubli: 'src/img/publis/publi_4.jpg', 
      description: "2 Seconds without you is like 2 much...",
      liked: true,
      likers: 1
    }
  ])


  return(
    <View style={StyleSheet.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})