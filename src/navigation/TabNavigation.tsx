import { View, Text, Image } from "react-native";
import React from "react";
import {
    Octicons,
    MaterialIcons,
    Ionicons,
    FontAwesome5
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TABS } from "./routes";
import OnBoarding from "@/screens/Onboarding/OnBoarding";
import Favorite from "@/screens/Favorite/Favorite";
import Cart from "@/screens/Cart/Cart";
import Profile from "@/screens/Profile/Profile";
import TabHeader from "@/components/molecules/TabHeader/TabHeader";
import Home from "@/screens/Home/Home";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#878787",
                tabBarStyle: {
                    backgroundColor: "white",
                    borderTopColor: "transparent",
                    height: 75,
                    paddingBottom: 15,
                    paddingTop: 10,
                    display: "flex"
                },
                tabBarLabelStyle: {
                    fontFamily: "Montserrat Regular",
                    fontSize: 14
                },
                header: ({ options }) => <TabHeader />
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <>
                                <Octicons
                                    name="home"
                                    size={26}
                                    color={focused ? "green" : "#878787"}
                                />
                            </>
                        );
                    },
                    title: "Home"
                }}
                name={TABS.HOME}
                component={Home}
            />
            <Tab.Screen
                name={TABS.FAVORITE}
                options={{
                    tabBarIcon: ({ focused, size }) => {
                        return (
                            <>
                                <MaterialIcons
                                    name="favorite-border"
                                    size={26}
                                    color={focused ? "green" : "#878787"}
                                />
                            </>
                        );
                    },
                    title: "Favorites"
                }}
                component={Favorite}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <>
                            <Ionicons
                                name="cart-outline"
                                size={26}
                                color={focused ? "green" : "#878787"}
                            />
                        </>
                    ),
                    title: "Cart"
                }}
                name={TABS.CART}
                component={Cart}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <FontAwesome5
                            name="user-circle"
                            size={26}
                            color={focused ? "green" : "#878787"}
                        />
                    ),
                    title: "Profile"
                }}
                name={TABS.PROFILE}
                component={Profile}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
