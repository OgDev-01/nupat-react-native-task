import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack } from "native-base";

interface TabHeaderProps {
    title?: string; // Optional title for pages that have title header
}
const TabHeader = ({ title }: TabHeaderProps) => {
    return (
        <HStack className="justify-between items-center px-5 h-14 ">
            {/* <Image /> */}
            <Pressable>
                <MaterialCommunityIcons name="bell" size={24} color="green" />
            </Pressable>
        </HStack>
    );
};

export default TabHeader;
