import { Text } from "react-native";
import React from "react";

interface TypographyProps {
    text: string;
    classNames?: string;
}
const Typography = ({ text, classNames }: TypographyProps) => {
    return (
        <Text
            className={`text-slate-700 ${classNames}`}
            style={{ fontFamily: "Montserrat Medium" }}
        >
            {text}
        </Text>
    );
};

export default Typography;
