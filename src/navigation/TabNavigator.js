import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Image } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RecentSearchScreen from "../components/RecentSearch";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        } else if (route === 'Profile') {
            // For 'Profile' route, return Image component with black border
            return (
                <Image 
                    source={{uri: 'https://i.pinimg.com/236x/f3/85/d7/f385d78eba93e8b768bcc04bf96fe5a5.jpg'}}
                    style={{
                        width: size * 1.2,
                        height: size * 1.2,
                        borderRadius: (size * 1.2) / 2,
                        borderWidth: focused ? 2 : 0, // Add border if focused
                        borderColor: focused ? 'black' : 'transparent', // Set border color
                    }}
                />
            );
        }
    
        return <Image source={iconName} style={{ width: size, height: size }} />;
    }

    const HomeStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => selectIcon('Search', focused, size) 
                }}  />

            <Stack.Screen  name="Post" component={PostScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image 
                        source={require('../img/base/post.png')}
                        style={{ width: size, height: size }}
                        />
                    )
                }} />
        </Stack.Navigator>
    );

    const SearchStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={SearchScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => selectIcon('Search', focused, size)
                }} />
            
            <Stack.Screen name="RecentSearch" component={RecentSearchScreen} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false
                }} />
        </Stack.Navigator>
    );

    const ReelsStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Reels" component={ReelsScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => selectIcon('Reels', focused, size)
                }} />
        </Stack.Navigator>
    );

    const ProfileStack = () => (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen}
                options={{ 
                    tabBarShowLabel: false, 
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => selectIcon('Profile', focused, size)
                }} />
        </Stack.Navigator>
    );
    

    const MainTabNavigator = () => (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Search" component={SearchStack} />
            <Tab.Screen name="Reels" component={ReelsStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabNavigatorContainer: {
        alignItems: 'center'
    }
})
