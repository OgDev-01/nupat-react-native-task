import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import React from "react";
import { HStack } from "native-base";

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    rightIcon?: React.ReactNode;
    type?: "email" | "password" | "default" | "number";
}
const Input = ({ placeholder, rightIcon, type }: InputProps) => {
    const keyboardType =
        type === "email"
            ? "email-address"
            : type === "number"
            ? "numeric"
            : "default";
    return (
        <HStack className="bg-secondary rounded-lg items-center px-3">
            {rightIcon}
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <TextInput
                    secureTextEntry={type === "password" ? true : false}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    style={{ fontFamily: "Montserrat Regular" }}
                    className="w-full  text-xl h-12 px-3"
                />
            </TouchableWithoutFeedback>
        </HStack>
    );
};

export default Input;
