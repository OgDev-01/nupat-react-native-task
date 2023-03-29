import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "native-base";
import Typography from "../Typography/Typography";

interface CategoryPillProps {
    text: string;
    onPress?: () => void;
    classNames?: string;
}
const CategoryPill = ({ text, onPress, classNames }: CategoryPillProps) => {
    return (
        <TouchableOpacity
            className={`bg-secondary px-10 py-3 rounded-2xl  ${classNames}`}
        >
            <Typography text="Hello World" />
        </TouchableOpacity>
    );
};

export default CategoryPill;
