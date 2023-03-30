import {
    View,
    Text,
    SafeAreaView,
    Animated,
    TouchableOpacity,
    Pressable
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Button, FlatList, HStack, StatusBar, VStack } from "native-base";
import { Slides } from "@/components/molecules/OnBoardingCard/data";
import OnBoardingCard from "@/components/molecules/OnBoardingCard/OnBoardingCard";
import FluidIndicator from "@/components/atoms/FluidIndicator/FluidIndicator";
import { useNavigation } from "@react-navigation/native";
import { AUTH_STACK } from "@/navigation/routes";

const OnBoarding = () => {
    const navigation = useNavigation();

    const [step, setStep] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef<any>(null);

    // Ref to update step when flatlist item in view port changes
    const viewItemsChanged = useRef(({ viewableItems }: any) => {
        setStep(viewableItems[0].index);
    }).current;

    // Scroll forward handler
    const handleScrollForward = () => {
        if (step < Slides.length - 1) {
            slideRef.current?.scrollToIndex({ index: step + 1 });
        }
    };

    // Scroll backward handler
    const handleScrollBackward = () => {
        if (step > 0) {
            slideRef.current?.scrollToIndex({ index: step - 1 });
        }
    };

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <SafeAreaView className="flex-1 bg-white">
            <VStack className="flex-1 " flex={3}>
                <HStack className="items-center justify-between h-12 px-6 py-2 mt-2">
                    {step !== 0 ? (
                        <TouchableOpacity onPress={handleScrollBackward}>
                            <AntDesign
                                name="arrowleft"
                                size={22}
                                color="green"
                                className="mt-0 tracking-tighter"
                            />
                        </TouchableOpacity>
                    ) : (
                        ""
                    )}
                    <TouchableOpacity
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [{ name: AUTH_STACK.SIGN_UP as never }]
                            })
                        }
                    >
                        <Text
                            style={{ fontFamily: "Montserrat Bold" }}
                            className="text-primary"
                        >
                            Skip
                        </Text>
                    </TouchableOpacity>
                </HStack>
                <FlatList
                    data={Slides}
                    renderItem={({ item }) => <OnBoardingCard {...item} />}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slideRef}
                />
                <VStack space={4} className=" h-[22%] items-center">
                    <FluidIndicator
                        data={Slides}
                        scrollX={scrollX}
                        step={step}
                    />

                    {step === 2 ? (
                        <Button
                            onPress={() =>
                                navigation.reset({
                                    index: 0,
                                    routes: [
                                        { name: AUTH_STACK.SIGN_UP as never }
                                    ]
                                })
                            }
                            className="px-12 py-5 text-xl rounded-lg bg-primary"
                        >
                            <Text
                                className="text-white"
                                style={{ fontFamily: "Montserrat Regular" }}
                            >
                                Get started
                            </Text>
                        </Button>
                    ) : (
                        <Pressable
                            onPress={handleScrollForward}
                            className="p-4 rounded-full bg-primary"
                        >
                            <AntDesign name="right" size={29} color="white" />
                        </Pressable>
                    )}
                </VStack>
            </VStack>
        </SafeAreaView>
    );
};

export default OnBoarding;
