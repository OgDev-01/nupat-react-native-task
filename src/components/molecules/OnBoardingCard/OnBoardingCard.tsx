import { View, Text, useWindowDimensions, Image } from "react-native";
import React from "react";
import { AspectRatio, Box, VStack } from "native-base";
import { slideOjects } from "./data";
import Typography from "@/components/atoms/Typography/Typography";

const OnBoardingCard = ({ title, desc, imgSrc }: slideOjects) => {
    const { width } = useWindowDimensions();
    return (
        <VStack
            className="h-[80%] "
            px="7"
            width={width}
            alignItems={"center"}
            space={2}
        >
            <Image
                className="h-[475px]  w-full justify-center"
                source={imgSrc}
                style={{ resizeMode: "contain" }}
            />
            <VStack space={5} className="">
                <Text
                    className="text-2xl text-center"
                    style={{ fontFamily: "Montserrat Bold" }}
                >
                    {title}
                </Text>
                <Text
                    className="text-lg text-center"
                    style={{ fontFamily: "Montserrat Regular" }}
                >
                    {desc}
                </Text>
            </VStack>
        </VStack>
    );
};

export default OnBoardingCard;
