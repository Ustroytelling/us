import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components";
import NewNevelScreen from "../screens/AppMain/NewNevelScreen";
import SearchScreen from "../screens/AppMain/SearchScreen";
import NovelIndexScreen from "../screens/NovelMain/NovelIndexScreen";
import ProfileScreen from "../screens/Tab/ProfileScreen";

const Stack = createNativeStackNavigator();

const AppMainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NovelIndex" component={NovelIndexScreen} />
      <Stack.Screen
        name="NewNovel"
        component={NewNevelScreen}
        options={{
          title: "작품 생성",
          headerShown: true,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

const SetupButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export default AppMainStack;
