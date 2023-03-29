import { View, Text, useWindowDimensions, Animated } from "react-native";
import React from "react";
import { HStack } from "native-base";

interface FluidIndicatorProps {
    data: any[];
    scrollX: any;
    step: number;
}
const FluidIndicator = ({ data, scrollX, step }: FluidIndicatorProps) => {
    const { width } = useWindowDimensions();
    return (
        <HStack space={6} className="py-4 justify-center">
            {data.map((dot, i) => {
                const inputRange = [
                    (i - 1) * width,
                    i * width,
                    (i + 1) * width
                ];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: "clamp"
                });
                return (
                    <Animated.View
                        style={{ width: dotWidth }}
                        className={` h-[10px] rounded-full ${
                            i === step ? "bg-primary" : "bg-secondary"
                        }`}
                        key={i}
                    ></Animated.View>
                );
            })}
        </HStack>
    );
};

export default FluidIndicator;
