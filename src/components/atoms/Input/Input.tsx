import React from "react";
import { HStack } from "native-base";

import { TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";

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
        <HStack className="items-center px-3 rounded-lg bg-secondary">
            {rightIcon}
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
                <TextInput
                    secureTextEntry={type === "password" ? true : false}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    style={{ fontFamily: "Montserrat Regular" }}
                    className="w-full h-12 px-3 text-xl"
                />
            </TouchableWithoutFeedback>
        </HStack>
    );
};

export default Input;
