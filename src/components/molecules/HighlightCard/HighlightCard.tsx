import {
    Image,
    Text,
    TouchableOpacity,
    useWindowDimensions
} from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import React from "react";
import { AspectRatio, Box, HStack } from "native-base";
import RatingPill from "@/components/atoms/RatingPill/RatingPill";
import { HiglightObject } from "./data";

const HighlightCard = ({
    title,
    rating,
    km,
    isDeliverable,
    imgSrc
}: HiglightObject) => {
    const { width } = useWindowDimensions();
    return (
        <TouchableOpacity className="mr-8" style={{ width: width * 0.6 }}>
            <Box className="relative">
                <AspectRatio ratio={59 / 40}>
                    <Image
                        resizeMode="cover"
                        className="w-full h-full"
                        source={imgSrc}
                    />
                </AspectRatio>
                <RatingPill
                    rating={rating}
                    classnames="absolute bottom-2 right-2"
                />
            </Box>
            <Text className="mt-1.5" style={{ fontFamily: "Montserrat Bold" }}>
                {title}
            </Text>
            <HStack className="mt-1.5" space={4}>
                <Box className="flex-row">
                    <FontAwesome5
                        name="location-arrow"
                        size={16}
                        color="#333333"
                    />
                    <Text
                        className="ml-1.5"
                        style={{ fontFamily: "Montserrat Regular" }}
                    >
                        {`${km}km`}
                    </Text>
                </Box>
                <Box className="flex-row">
                    <Feather name="truck" size={16} color="#333333" />
                    <Text
                        className="ml-1.5"
                        style={{ fontFamily: "Montserrat Regular" }}
                    >
                        Delivery available
                    </Text>
                </Box>
            </HStack>
        </TouchableOpacity>
    );
};

export default HighlightCard;
