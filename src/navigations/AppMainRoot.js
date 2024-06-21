import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppMainStack from "./AppMainStack";
import NovelStack from "./NovelStack";
import ProfileStack from "./ProfileStack";
import SignInStack from "./SignInStack";
import SignInScreen from "../screens/SignIn/SignInScreen";

const Root = createNativeStackNavigator();

const AppMainRoot = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Root.Screen name="SignIn" component={SignInScreen} />
      <Root.Screen name="SignInStack" component={SignInStack} />
      <Root.Screen name="MainStack" component={AppMainStack} />
      <Root.Screen name="NovelStack" component={NovelStack} />
      <Root.Screen name="ProfileStack" component={ProfileStack} />
    </Root.Navigator>
  );
};

export default AppMainRoot;
