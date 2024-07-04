import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../assets/color";

import NovelInfoScreen from "../screens/NovelMain/NovelInfoScreen";
import NovelParticipantsScreen from "../screens/NovelMain/NovelParticipantsScreen";

const Tab = createMaterialTopTabNavigator();

const NovelInfoTab = (props) => {
  const { data, onChangeData } = props;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "rgba(32, 32, 32, 1)",
        tabBarInactiveTintColor: "rgba(32, 32, 32, 1)",
        tabBarStyle: {
          height: 38,
          backgroundColor: "white",
          shadowColor: colors.white,
          borderBottomWidth: 1,
          borderBottomColor: colors.grey5,
        },
        tabBarLabelStyle: {
          marginTop: -8,
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
        options={{
          title: "작품 소개",
        }}
      >
        {() => <NovelInfoScreen data={data} onChangeData={onChangeData} />}
      </Tab.Screen>
      <Tab.Screen
        name="Participant"
        options={{
          title: "참여자 정보",
        }}
      >
        {() => <NovelParticipantsScreen data={data.stakeInfos} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default NovelInfoTab;
