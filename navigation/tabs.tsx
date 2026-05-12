import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabLabel = ({ label, focused }: any) => (
  <View style={{ alignItems: "center" }}>
    <Text style={{ color: focused ? "#fff" : "#777", fontSize: 12 }}>
      {label}
    </Text>

    <View
      style={{
        marginTop: 4,
        height: 3,
        width: focused ? 14 : 0,
        backgroundColor: "#FF6B35",
        borderRadius: 2,
      }}
    />
  </View>
);
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0B0B0B",
          borderTopWidth: 0,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabLabel label="Home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabLabel label="Favoritos" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabLabel label="Perfil" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}