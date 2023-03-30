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
import { Button, HStack, VStack } from "native-base";
import AuthDivider from "@/components/atoms/AuthDivider/AuthDivider";
import SocialAuthButtons from "@/components/molecules/SocialAuthButtons/SocialAuthButtons";
import { useNavigation } from "@react-navigation/native";
import { AUTH_STACK } from "@/navigation/routes";

const SignUp = () => {
    const navigation = useNavigation();
    return (
        <ScrollView className="flex-1 bg-white">
            <VStack space={6} className="px-6 py-10">
                <Input
                    rightIcon={
                        <FontAwesome5
                            name="user-circle"
                            size={24}
                            color="#868686"
                        />
                    }
                    placeholder="Ritzy"
                />
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
                        <MaterialCommunityIcons
                            name="email-open-outline"
                            size={24}
                            color="#878787"
                        />
                    }
                    placeholder="Email"
                />
                <Input
                    rightIcon={
                        <Feather name="phone" size={24} color="#878787" />
                    }
                    placeholder="Phone Number"
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
                <Input
                    rightIcon={
                        <SimpleLineIcons
                            name="location-pin"
                            size={24}
                            color="#878787"
                        />
                    }
                    placeholder="Location"
                />

                <Button
                    onPress={() =>
                        navigation.navigate(AUTH_STACK.VERIFY_OTP as never)
                    }
                    className="py-5 text-lg rounded-lg bg-primary"
                >
                    <Text
                        className="text-lg text-white"
                        style={{ fontFamily: "Montserrat Regular" }}
                    >
                        Create Account
                    </Text>
                </Button>

                <AuthDivider />

                <SocialAuthButtons />

                <HStack space={1} className="justify-center">
                    <Text style={{ fontFamily: "Montserrat Regular" }}>
                        Already registered?
                    </Text>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate(AUTH_STACK.SIGN_IN as never)
                        }
                    >
                        <Text style={{ fontFamily: "Montserrat Bold" }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </HStack>
            </VStack>
        </ScrollView>
    );
};

export default SignUp;
