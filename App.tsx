import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import CategoryPill from "./src/components/atoms/CategoryPill/CategoryPill";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";
import { StatusBar } from "react-native";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Montserrat Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat Medium": require("./assets/fonts/Montserrat-Medium.ttf")
    });

    if (!fontsLoaded) return null;
    return (
        <NativeBaseProvider>
            <StatusBar
                backgroundColor={"white"}
                barStyle="dark-content"
                animated
            />
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}
