import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native";

import Header from "./src/components/Header";
import List from "./src/components/List";

export default function App() {
  const [feed, setFeed] = useState([
    {
      id: '1', 
      name: 'GeovanaSousa', 
      imgProfile: 'https://raw.githubusercontent.com/GeovanaSLima/GeovanaSLima/main/GitProfile.png',
      imgPubli: require('./src/img/publis/publi_1.jpg'), 
      description: 'Ontem demorei para dormir, tava meio assim sla...',
      liked: true,
      likes: 32,
      comments: 7,
      date: Date('2024-03-28') 
    },
    {
      id: '2', 
      name: 'geehSl', 
      imgProfile: 'https://i.pinimg.com/236x/f3/85/d7/f385d78eba93e8b768bcc04bf96fe5a5.jpg',
      imgPubli: require('./src/img/publis/publi_6.jpg'), 
      description: "I should've bought you flowers and held your hand...",
      liked: true,
      likes: 24,
      comments: 7,
      date: Date('2024-03-28') 
    },
    {
      id: '3', 
      name: 'geh.s', 
      imgProfile: 'https://raw.githubusercontent.com/GeovanaSLima/GeovanaSLima/main/GitProfile.png',
      imgPubli: require('./src/img/publis/publi_2.jpg'), 
      description: 'O meu lugar...',
      liked: false,
      likes: 12,
      comments: 0,
      date: Date('2024-03-30')
    },
    {
      id: '4', 
      name: 'geeshhl', 
      imgProfile: 'https://i.redd.it/5560va6tsg191.jpg',
      imgPubli: require('./src/img/publis/publi_3.jpg'), 
      description: 'Deixa eu te amar...',
      liked: true,
      likes: 65,
      comments: 5,
      date: Date('2024-04-02')
    },
    {
      id: '5', 
      name: 'J.gsl', 
      imgProfile: 'https://miro.medium.com/v2/resize:fit:400/1*B8c1ED3QV_yaa6PAWqDgMw.png',
      imgPubli: require('./src/img/publis/publi_4.jpg'), 
      description: "2 Seconds without you is like 2 much...",
      liked: true,
      likes: 89,
      comments: 15,
      date: Date('2024-04-05')
    },
  ])


  return(
    <View style={StyleSheet.container}>

      <Header/>

      <FlatList 
      data={feed}
      keyExtractor={ (item) => item.id }
      renderItem={ ({ item }) => <List data={item} /> }
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