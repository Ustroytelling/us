import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../assets/color";
import LibraryTab from "../screens/Storage/LibraryTab";
import NoteTab from "../screens/Storage/NoteTab";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const StorageTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.mainText,
        tabBarInactiveTintColor: colors.mainText,
        tabBarStyle: {
          height: 36,
          backgroundColor: colors.white,
          shadowColor: colors.white,
          borderBottomWidth: 1,
          borderBottomColor: colors.grey4,
        },
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              style={{
                marginTop: -14,
                fontSize: 15,
                fontWeight: focused ? 700 : 400,
                textAlign: "center",
                lineHeight: 22,
                color: color,
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarIndicatorStyle: {
          borderBottomColor: colors.grey2,
          borderBottomWidth: 2,
        },
        tabBarPressColor: colors.white,
      })}
    >
      <Tab.Screen
        name="서재"
        component={LibraryTab}
        options={{
          title: "서재",
        }}
      />
      <Tab.Screen
        name="노트"
        component={NoteTab}
        options={{
          title: "노트",
        }}
      />
    </Tab.Navigator>
  );
};

export default StorageTab;
