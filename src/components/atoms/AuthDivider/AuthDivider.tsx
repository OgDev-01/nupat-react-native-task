import { View, Text } from "react-native";
import React from "react";
import { Box, HStack } from "native-base";

const AuthDivider = () => {
    return (
        <HStack className="items-center">
            <Box className="flex-1 bg-secondary h-1 w-1"></Box>
            <Text className="px-3" style={{ fontFamily: "Montserrat Regular" }}>
                or
            </Text>
            <Box className="flex-1 bg-secondary  h-1 w-1"></Box>
        </HStack>
    );
};

export default AuthDivider;
