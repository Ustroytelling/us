import React, { useCallback, useMemo } from "react";
import { LayoutAnimation } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../assets/color";

import NovelInfoScreen from "../screens/NovelMain/NovelInfoScreen";
import NovelParticipantsScreen from "../screens/NovelMain/NovelParticipantsScreen";

const Tab = createMaterialTopTabNavigator();

const NovelInfoTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "rgba(32, 32, 32, 1)",
          tabBarInactiveTintColor: "rgba(32, 32, 32, 1)",
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            textAlign: "center",
            fontSize: 16,
            fontWeight: 500,
          },
          tabBarIndicatorStyle: {
            borderBottomColor: "rgba(59, 59, 59, 1)",
            borderBottomWidth: 2,
          },
          tabBarPressColor: colors.white,
        }}
      >
        <Tab.Screen
          name="NovelInfo"
          component={NovelInfoScreen}
          options={{
            title: "작품 소개",
          }}
        />
        <Tab.Screen
          name="Participant"
          component={NovelParticipantsScreen}
          options={{
            title: "참여자 정보",
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default NovelInfoTab;
