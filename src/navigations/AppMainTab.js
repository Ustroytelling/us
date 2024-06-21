import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AppMainScreen from "../screens/AppMain/AppMainScreen";
import AlertScreen from "../screens/Alert/AlertScreen";
import HomeIcon from "../assets/BottomIcons/homeMenu3.svg";
import AlertIcon from "../assets/BottomIcons/onigiriRiceBall.svg";
import AlertBlackIcon from "../assets/BottomIcons/onigiri rice ball black.svg";
import StorageIcon from "../assets/BottomIcons/creditCard.svg";
import ProfileIcon from "../assets/BottomIcons/profileUserPerson.svg";
import MyInfoScreen from "../screens/Profile/MyInfoScreen";
import StorageScreen from "../screens/Storage/StorageScreen";
import { colors } from "../assets/color";

const Tab = createBottomTabNavigator();

const AppMainTab = () => {
  return (
    // rgba(71, 190, 192, 1)
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "rgba(71, 190, 192, 1)",
        tabBarInactiveTintColor: colors.grey1,
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          marginTop: -4,
          textAlign: "center",
          fontSize: 10,
          fontWeight: 400,
          lineHeight: 20,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={AppMainScreen}
        options={{
          tabBarLabel: "홈",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <HomeIcon fill={focused ? colors.strong : colors.grey1} />;
          },
        }}
      />
      <Tab.Screen
        name="Alert"
        component={AlertScreen}
        options={{
          title: "알림",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? <AlertIcon /> : <AlertBlackIcon />;
          },
        }}
      />
      <Tab.Screen
        name="Storage"
        component={StorageScreen}
        options={{
          title: "보관함",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <StorageIcon fill={focused ? colors.strong : colors.grey1} />;
          },
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyInfoScreen}
        options={{
          title: "내정보",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <ProfileIcon fill={focused ? colors.strong : colors.grey1} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppMainTab;
