import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import MyInfoScreen from "../screens/Profile/MyInfoScreen";
import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import CommentsScreen from "../screens/Profile/CommentsScreen";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyInfo" component={MyInfoScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
