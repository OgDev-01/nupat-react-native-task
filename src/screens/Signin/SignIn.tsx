import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { Button, HStack, VStack } from "native-base";
import { AUTH_STACK, ROOT_STACK } from "@/navigation/routes";
import { useNavigation } from "@react-navigation/native";

import Input from "@/components/atoms/Input/Input";
import AuthDivider from "@/components/atoms/AuthDivider/AuthDivider";
import SocialAuthButtons from "@/components/molecules/SocialAuthButtons/SocialAuthButtons";

const SignIn = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-1 bg-white">
            <VStack space={6} className="flex-1 px-6 py-10 ">
                <Input
                    rightIcon={
                        <FontAwesome5
                            name="user-circle"
                            size={24}
                            color="#858585"
                        />
                    }
                    placeholder="Username"
                />

                <Input
                    rightIcon={
                        <SimpleLineIcons
                            name="lock"
                            size={24}
                            color="#878787"
                        />
                    }
                    placeholder="Password"
                    type="password"
                />

                <Button
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: ROOT_STACK.TABS as never }]
                        })
                    }
                    className="py-5 text-lg rounded-lg bg-primary"
                >
                    <Text
                        className="text-lg text-white"
                        style={{ fontFamily: "Montserrat Regular" }}
                    >
                        Sign In
                    </Text>
                </Button>

                <TouchableOpacity className="ml-auto -mt-5">
                    <Text
                        className="text-red-500"
                        style={{ fontFamily: "Montserrat Regular" }}
                    >
                        Forgot password?
                    </Text>
                </TouchableOpacity>

                <VStack className="mt-16 " space={6}>
                    <AuthDivider />

                    <SocialAuthButtons />
                </VStack>
                <HStack space={1} className="justify-center mt-auto">
                    <Text style={{ fontFamily: "Montserrat Regular" }}>
                        Not registered yet?
                    </Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [{ name: AUTH_STACK.SIGN_UP as never }]
                            })
                        }
                    >
                        <Text style={{ fontFamily: "Montserrat Bold" }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </HStack>
            </VStack>
        </View>
    );
};

export default SignIn;
