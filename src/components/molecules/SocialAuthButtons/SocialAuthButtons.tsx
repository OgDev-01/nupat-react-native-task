import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HStack } from "native-base";

const SocialAuthButtons = () => {
    return (
        <HStack className="justify-center" space={5}>
            <TouchableOpacity className="p-2.5 items-center justify-center rounded-lg border">
                <Image
                    className="w-5 h-5"
                    resizeMode="cover"
                    source={require("@app/assets/google.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-600 p-2.5 items-center rounded-lg justify-center">
                <Image
                    className="w-5 h-5"
                    resizeMode="contain"
                    source={require("@app/assets/facebook.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity className="bg-black p-2.5 items-center rounded-lg justify-center">
                <Image
                    className="w-5 h-5"
                    resizeMode="contain"
                    source={require("@app/assets/apple.png")}
                />
            </TouchableOpacity>
        </HStack>
    );
};

export default SocialAuthButtons;
