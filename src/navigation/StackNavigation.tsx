import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../screens/Onboarding/OnBoarding";
import { AUTH_STACK, ROOT_STACK } from "./routes";
import SignUp from "@/screens/Signup/SignUp";
import SignIn from "@/screens/Signin/SignIn";
import TabNavigation from "./TabNavigation";
import VerifyOtp from "@/screens/VerifyOtp/VerifyOtp";

const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: { fontFamily: "Montserrat Bold" }
            }}
        >
            <Stack.Screen
                options={{ headerShown: false }}
                name={AUTH_STACK.ON_BOARDING}
                component={OnBoarding}
            />
            <Stack.Group>
                <Stack.Screen
                    options={{ title: "Create an Account" }}
                    name={AUTH_STACK.SIGN_UP}
                    component={SignUp}
                />
                <Stack.Screen
                    options={{ title: "Sign In" }}
                    name={AUTH_STACK.SIGN_IN}
                    component={SignIn}
                />
                <Stack.Screen
                    options={{ title: "Verification Code" }}
                    name={AUTH_STACK.VERIFY_OTP}
                    component={VerifyOtp}
                />
            </Stack.Group>

            <Stack.Screen
                options={{ headerShown: false }}
                component={TabNavigation}
                name={ROOT_STACK.TABS}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
