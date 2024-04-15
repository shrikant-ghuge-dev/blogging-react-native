import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router';
import icons from '../../constants/icons';



const TabIcon = ({ icon, name, color, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image source={icon} resizeMode='contain' tintColor={color} className="w-6 h-6" />
            <Text className={`text-xs`}>Home</Text>
        </View>
    )
}

const TabLayout = () => {
    return (
        <>
            <Tabs screenOptions={{tabBarShowLabel: false}}>
                <Tabs.Screen name='home' options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
                    )
                }} />
            </Tabs>
            <Tabs screenOptions={{ tabBarShowLabel: false }}>
                <Tabs.Screen name='profile' options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
                    )
                }} />
            </Tabs>
            <Tabs screenOptions={{ tabBarShowLabel: false }}>
                <Tabs.Screen name='post' options={{
                    title: 'Post',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon icon={icons.home} color={color} name="Post" focused={focused} />
                    )
                }} />
            </Tabs>
        </>
    )
}

export default TabLayout

const styles = StyleSheet.create({})