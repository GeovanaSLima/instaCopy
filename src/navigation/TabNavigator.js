import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import PostScreen from "../screens/PostScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    function selectIcon(route, focused, size) {
        let iconName;

        if (route === 'Home') {
            iconName = focused
            ? require('../img/base/home_filled.png')
            : require('../img/base/home.png');
        } else if (route === 'Search') {
            iconName = focused
            ? require('../img/base/search_filled.png')
            : require('../img/base/search.png');
        } else if (route === 'Reels') {
            iconName = focused
            ? require('../img/base/reel_filled.png')
            : require('../img/base/reel.png');
        } 

        return <Image source={iconName} style={{ width: size, height: size }} />;
    }

    return(
        <Tab.Navigator style={styles.tabNavigatorContainer}>

            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => selectIcon('Home', focused, size)
                }} 
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => selectIcon('Search', focused, size)
                }} 
            />

            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image 
                        source={require('../img/base/post.png')}
                        style={{ width: size, height: size }}
                        />
                    )
                }} 
            />

            <Tab.Screen
                name="Reels"
                component={ReelsScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => selectIcon('Reels', focused, size)
                }} 
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image 
                        source={{uri: 'https://i.pinimg.com/236x/f3/85/d7/f385d78eba93e8b768bcc04bf96fe5a5.jpg'}}
                        style={{ width: size, height: size, borderRadius: size/2 }}
                        />
                    )
                }} 
            />
    </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    tabNavigatorContainer: {
        alignItems: 'center'
    }
})
