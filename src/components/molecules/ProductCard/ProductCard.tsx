import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    Image
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { AspectRatio, Box, HStack, VStack } from "native-base";

import RatingPill from "@/components/atoms/RatingPill/RatingPill";
import { FoodObject } from "./data";

const ProductCard = ({
    name,
    vendorName,
    price,
    imgSrc,
    rating
}: FoodObject) => {
    const { width } = useWindowDimensions();
    return (
        <TouchableOpacity
            className="mb-6 mr-10 rounded-2xl"
            style={{
                width: width * 0.6,
                elevation: 8,
                shadowColor: "rgba(81, 127, 36, 0.1)",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 1,
                shadowRadius: 25
            }}
        >
            <HStack className="w-full p-3" space={2}>
                <Box className="relative w-4/6">
                    <AspectRatio ratio={56 / 47}>
                        <Image
                            resizeMode="cover"
                            className="w-full h-full"
                            source={imgSrc}
                        />
                    </AspectRatio>
                    <RatingPill
                        classnames="absolute -bottom-2 left-2"
                        rating={rating}
                    />
                </Box>
                <VStack space={1} className="relative py-1 shrink-0">
                    <Text
                        className="text-sm"
                        style={{ fontFamily: "Montserrat Medium" }}
                    >
                        {vendorName}
                    </Text>
                    <Text
                        className="w-full text-sm max-w-[90px]"
                        style={{ fontFamily: "Montserrat Medium" }}
                    >
                        {name}
                    </Text>
                    <Text
                        className="text-sm"
                        style={{ fontFamily: "Montserrat Medium" }}
                    >
                        ${price}
                    </Text>
                    <TouchableOpacity className="absolute p-1.5 rounded-full -bottom-1.5 right-0 bg-primary/70">
                        <MaterialIcons
                            name="favorite-border"
                            size={18}
                            color="white"
                        />
                    </TouchableOpacity>
                </VStack>
            </HStack>
        </TouchableOpacity>
    );
};

export default ProductCard;
