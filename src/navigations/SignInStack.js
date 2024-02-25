import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignUpFirstScreen from "../screens/SignIn/SignUpFirstScreen";
import SignUpSecondScreen from "../screens/SignIn/SignUpSecondScreen";
import AppMainTab from "./AppMainTab";

const Stack = createNativeStackNavigator();

const SignInStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AppMain"
        component={AppMainTab}
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="SignUpFirst" component={SignUpFirstScreen} />
      <Stack.Screen name="SignUpSecond" component={SignUpSecondScreen} />
    </Stack.Navigator>
  );
};

export default SignInStack;
