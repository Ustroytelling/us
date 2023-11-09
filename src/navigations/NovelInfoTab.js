import React, { useCallback, useMemo } from "react";
import { LayoutAnimation } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BottomSheet from "@gorhom/bottom-sheet";
import NovelInfoScreen from "../screens/NovelMain/NovelInfoScreen";
import NovelParticipantsScreen from "../screens/NovelMain/NovelParticipantsScreen";

const Tab = createMaterialTopTabNavigator();

const NovelInfoTab = ({ bottomSheetRef2 }) => {
  const snapPoints2 = useMemo(() => ["1%", "85%"], []);

  const handleSheetChanges2 = useCallback((index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef2}
      index={-1}
      snapPoints={snapPoints2}
      onChange={handleSheetChanges2}
      handleIndicatorStyle={{
        backgroundColor: "rgba(219, 219, 219, 1)",
        width: 80,
      }}
    >
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
    </BottomSheet>
  );
};

export default NovelInfoTab;
