import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Button, HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AUTH_STACK } from "@/navigation/routes";

const VerifyOtp = () => {
    const navigation = useNavigation();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    const handleNumberPress = (num: string) => {
        let tempCode = [...otp];
        for (let i = 0; i < tempCode.length; i++) {
            if (tempCode[i] == "") {
                tempCode[i] = num;
                break;
            } else {
                continue;
            }
        }
        setOtp(tempCode);
    };

    return (
        <View className="flex-1 bg-white">
            <ImageBackground
                className="w-full h-[105%]"
                resizeMode="contain"
                source={require("@app/assets/verify-bg.png")}
            >
                <VStack space={8} className="py-24">
                    <Text
                        className="text-center text-white"
                        style={{ fontFamily: "Montserrat Bold" }}
                    >
                        Enter the OTP sent to +234567820122
                    </Text>

                    <HStack space={6} className="justify-center ">
                        {otp &&
                            otp.map((number, i) => (
                                <Box
                                    className="items-center justify-center w-12 h-12 bg-white"
                                    key={i.toString()}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "Montserrat Bold"
                                        }}
                                    >
                                        {number}
                                    </Text>
                                </Box>
                            ))}
                    </HStack>

                    <HStack className="flex-wrap items-center justify-center w-full px-4 mt-12">
                        {numbers.map((num, i) => (
                            <Box
                                key={i.toString()}
                                className="w-[32%] h-20  justify-center"
                            >
                                <TouchableOpacity
                                    onPress={() => handleNumberPress(num)}
                                >
                                    <Text
                                        className="text-3xl text-center text-white"
                                        style={{
                                            fontFamily: "Montserrat Bold"
                                        }}
                                    >
                                        {num}
                                    </Text>
                                </TouchableOpacity>
                            </Box>
                        ))}
                    </HStack>

                    <Box className="px-8 ">
                        <Button
                            onPress={() =>
                                navigation.navigate(AUTH_STACK.SIGN_IN as never)
                            }
                            className="py-5 bg-white rounded-lg"
                        >
                            <Text
                                className="text-xl text-center text-primary"
                                style={{
                                    fontFamily: "Montserrat Medium"
                                }}
                            >
                                {" "}
                                Verify
                            </Text>
                        </Button>
                    </Box>
                </VStack>
            </ImageBackground>
        </View>
    );
};

export default VerifyOtp;
