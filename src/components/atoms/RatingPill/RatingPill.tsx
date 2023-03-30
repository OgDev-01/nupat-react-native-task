import React from "react";
import { Text } from "react-native";
import { VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

interface RatingPillProps {
    classnames?: string;
    rating: number;
}
const RatingPill = ({ classnames, rating }: RatingPillProps) => {
    return (
        <VStack
            style={{
                elevation: 5,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 8
            }}
            space={1}
            className={`bg-white rounded-full px-1.5 py-2 max-w-max ${classnames}`}
        >
            <FontAwesome name="star" size={16} color="#FFC107" />
            <Text
                style={{ fontFamily: "Montserrat Regular" }}
                className="text-xs"
            >
                {rating}
            </Text>
        </VStack>
    );
};

export default RatingPill;
