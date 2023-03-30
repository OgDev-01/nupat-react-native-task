import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Box } from "native-base";
import Typography from "../Typography/Typography";

interface CategoryPillProps {
    text: string;
    onPress?: () => void;
    classNames?: string;
    textClasses?: string;
}
const CategoryPill = ({
    text,
    onPress,
    classNames,
    textClasses
}: CategoryPillProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                elevation: 8,
                shadowColor: "rgba(81, 127, 36, 0.1)",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 1,
                shadowRadius: 25
            }}
            className={`bg-secondary px-10 py-3 rounded-xl w-max mr-4 ${classNames}`}
        >
            <Typography classNames={textClasses} text={text} />
        </TouchableOpacity>
    );
};

export default CategoryPill;
