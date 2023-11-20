import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../assets/color";
import JoinNovelTab from "../screens/Alert/JoinNovelTab";
import AllAlertTab from "../screens/Alert/AllAlertTab";
import MyNovelTab from "../screens/Alert/MyNovelTab";
import SubscribeNovelTab from "../screens/Alert/SubscribeNovelTab";

const Tab = createMaterialTopTabNavigator();

const AlertTab = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: colors.mainText,
        tabBarInactiveTintColor: colors.mainText,
        tabBarStyle: {
          height: 32,
          backgroundColor: colors.white,
          shadowColor: colors.white,
        },
        tabBarLabelStyle: {
          marginTop: -14,
          textAlign: "center",
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 22,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: colors.grey2,
          borderBottomWidth: 2,
        },
        tabBarPressColor: colors.white,
      })}
    >
      <Tab.Screen
        name="All"
        component={AllAlertTab}
        options={{
          title: "전체",
        }}
      />
      <Tab.Screen
        name="MyNovel"
        component={MyNovelTab}
        options={{
          title: "My 소설",
        }}
      />
      <Tab.Screen
        name="JoinNovel"
        component={JoinNovelTab}
        options={{
          title: "참여 소설",
        }}
      />
      <Tab.Screen
        name="SubscribeNovel"
        component={SubscribeNovelTab}
        options={{
          title: "구독",
        }}
      />
    </Tab.Navigator>
  );
};

export default AlertTab;
