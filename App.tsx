import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";

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
