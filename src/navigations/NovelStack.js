import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components";
import NovelIndexScreen from "../screens/NovelMain/NovelIndexScreen";
import ViewerScreen from "../screens/Viewer/ViewerScreen";

const Stack = createNativeStackNavigator();

const NovelStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NovelIndex" component={NovelIndexScreen} />
      <Stack.Screen name="NovelViewer" component={ViewerScreen} />
    </Stack.Navigator>
  );
};

const SetupButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export default NovelStack;
