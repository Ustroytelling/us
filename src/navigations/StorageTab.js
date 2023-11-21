import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../assets/color";
import ReadNovelTab from "../screens/Storage/ReadNovelTab";
import LikeNovelTab from "../screens/Storage/LikeNovelTab";
import MyNovelTab from "../screens/Storage/MyNovelTab";
import JoinNovelTab from "../screens/Storage/JoinNovelTab";

const Tab = createMaterialTopTabNavigator();

const StorageTab = () => {
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
        name="ReadNovel"
        component={ReadNovelTab}
        options={{
          title: "읽은 소설",
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
        name="LikeNovel"
        component={LikeNovelTab}
        options={{
          title: "좋아요",
        }}
      />
    </Tab.Navigator>
  );
};

export default StorageTab;
