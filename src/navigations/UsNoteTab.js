import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../assets/color";
import AllNotesTab from "../screens/Viewer/AllNotesTab";
import WrittenPostTab from "../screens/Viewer/WrittenPostTab";
import LikedPostTab from "../screens/Viewer/LikedPostTab";
import UsTalkTab from "../screens/Viewer/UsTalkTab";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const UsNoteTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.mainText,
        tabBarInactiveTintColor: colors.mainText,
        tabBarStyle: {
          height: 40,
          shadowColor: colors.white,
        },
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              style={{
                marginTop: -5,
                fontSize: 14,
                fontWeight: focused ? 500 : 400,
                textAlign: "center",
                lineHeight: 24,
                color: color,
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarIndicatorStyle: {
          borderBottomColor: colors.grey1,
          borderBottomWidth: 2,
        },
        tabBarPressColor: "transparent",
      })}
    >
      <Tab.Screen
        name="전체"
        component={AllNotesTab}
        options={{
          title: "전체",
        }}
      />
      <Tab.Screen
        name="내가쓴글"
        component={WrittenPostTab}
        options={{
          title: "내가쓴글",
        }}
      />
      <Tab.Screen
        name="좋아요"
        component={LikedPostTab}
        options={{
          title: "좋아요",
        }}
      />
      <Tab.Screen
        name="우스톡"
        component={UsTalkTab}
        options={{
          title: "우스톡",
        }}
      />
    </Tab.Navigator>
  );
};

export default UsNoteTab;
