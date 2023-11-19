import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppMainTab from "./AppMainTab";
import AppMainStack from "./AppMainStack";
import NovelStack from "./NovelStack";
import ProfileStack from "./ProfileStack";

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
      <Root.Screen name="NovelStack" component={NovelStack} />
      <Root.Screen name="ProfileStack" component={ProfileStack} />
    </Root.Navigator>
  );
};

export default AppMainRoot;
