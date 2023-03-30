import { TouchableWithoutFeedback, Keyboard, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { HStack } from "native-base";

const Search = () => {
    return (
        <HStack className="items-center w-[85%] bg-secondary rounded-lg px-3 overflow-hidden">
            <Ionicons name="ios-search-outline" size={24} color="#878787" />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <TextInput
                    keyboardType={"default"}
                    placeholder={"Restaurant, Food"}
                    style={{ fontFamily: "Montserrat Regular" }}
                    className="w-full text-xl h-10 pl-6"
                />
            </TouchableWithoutFeedback>
        </HStack>
    );
};

export default Search;
