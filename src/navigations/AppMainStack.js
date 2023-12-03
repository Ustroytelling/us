import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components";
import NewNevelScreen from "../screens/AppMain/NewNevelScreen";
import SearchScreen from "../screens/AppMain/SearchScreen";
import SearchResultScreen from "../screens/AppMain/SearchResultScreen";
import AlgorithmNovelScreen from "../screens/AppMain/TopicNovelScreen";
import TopicNovelScreen from "../screens/AppMain/TopicNovelScreen";

const Stack = createNativeStackNavigator();

const AppMainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="NewNovel"
        component={NewNevelScreen}
        options={{
          title: "작품 생성",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SearchResult" component={SearchResultScreen} />
      <Stack.Screen name="TopicNovel" component={TopicNovelScreen} />
    </Stack.Navigator>
  );
};

export default AppMainStack;
