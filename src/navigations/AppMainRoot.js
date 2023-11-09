import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppMainTab from "./AppMainTab";
import AppMainStack from "./AppMainStack";

const Root = createNativeStackNavigator();

const AppMainRoot = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Root.Screen name="MainTab" component={AppMainTab} />
      <Root.Screen name="MainStack" component={AppMainStack} />
    </Root.Navigator>
  );
};

export default AppMainRoot;
