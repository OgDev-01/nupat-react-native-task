import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack } from "native-base";

interface TabHeaderProps {
    title?: string; // Optional title for pages that have title header
}
const TabHeader = ({ title }: TabHeaderProps) => {
    return (
        <HStack className="items-center justify-between px-5 bg-white h-14">
            <Image source={require("@app/assets/burger.png")} />
            <Pressable>
                <MaterialCommunityIcons name="bell" size={24} color="green" />
            </Pressable>
        </HStack>
    );
};

export default TabHeader;
