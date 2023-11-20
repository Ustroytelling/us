import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import styled from "styled-components";
import AppMainScreen from "../screens/AppMain/AppMainScreen";
import AlertScreen from "../screens/Alert/AlertScreen";
import LockerScreen from "../screens/Tab/LockerScreen";
import HomeIcon from "../assets/BottomIcons/homeMenu3.svg";
import AlertIcon from "../assets/BottomIcons/onigiriRiceBall.svg";
import LocerIcon from "../assets/BottomIcons/creditCard.svg";
import ProfileIcon from "../assets/BottomIcons/profileUserPerson.svg";
import MyInfoScreen from "../screens/Profile/MyInfoScreen";

const Tab = createBottomTabNavigator();

const AppMainTab = () => {
  return (
    // rgba(71, 190, 192, 1)
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "rgba(71, 190, 192, 1)",
        tabBarInactiveTintColor: "rgba(71, 190, 192, 1)",
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 10,
          fontWeight: 400,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={AppMainScreen}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: ({ focused, color, size }) => {
            return <HomeIcon />;
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
            return <AlertIcon />;
          },
        }}
      />
      <Tab.Screen
        name="Save"
        component={LockerScreen}
        options={{
          title: "보관함",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <LocerIcon />;
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
            return <ProfileIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const SetupButton = styled.TouchableOpacity`
  margin-right: 20px;
`;

export default AppMainTab;
