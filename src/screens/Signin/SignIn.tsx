import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Pressable
} from "react-native";
import {
    FontAwesome5,
    MaterialCommunityIcons,
    Feather,
    SimpleLineIcons
} from "@expo/vector-icons";
import React from "react";
import Input from "@/components/atoms/Input/Input";
import { Box, Button, HStack, VStack } from "native-base";
import AuthDivider from "@/components/atoms/AuthDivider/AuthDivider";
import SocialAuthButtons from "@/components/molecules/SocialAuthButtons/SocialAuthButtons";
import { useNavigation } from "@react-navigation/native";
import { ROOT_STACK, TABS } from "@/navigation/routes";

const SignIn = () => {
    const navigation = useNavigation();
    return (
        <ScrollView className="flex-1 bg-white">
            <VStack space={8} className="px-6 py-10 flex-1">
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
                    className="py-5 rounded-lg bg-primary text-lg"
                >
                    <Text
                        className="text-white text-lg"
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

                <VStack className="mt-16" space={6}>
                    <AuthDivider />

                    <SocialAuthButtons />

                    <HStack space={1} className="justify-center mt-auto">
                        <Text style={{ fontFamily: "Montserrat Regular" }}>
                            Not registered yet?
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontFamily: "Montserrat Bold" }}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </HStack>
                </VStack>
            </VStack>
        </ScrollView>
    );
};

export default SignIn;
