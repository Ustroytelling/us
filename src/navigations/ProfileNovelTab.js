import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../assets/color";
import JoinNovelTab from "../screens/Profile/JoinNovelTab";
import CollectionTab from "../screens/Profile/CollectionTab";

const Tab = createMaterialTopTabNavigator();

const ProfileNovelTab = (props) => {
  const { collection, joinNovel } = props.public;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.mainText,
        tabBarInactiveTintColor: colors.mainText,
        tabBarStyle: {
          backgroundColor: colors.white,
          shadowColor: colors.white,
        },
        tabBarLabelStyle: {
          textAlign: "center",
          fontSize: 16,
          fontWeight: 400,
        },
        tabBarIndicatorStyle: {
          borderBottomColor: colors.grey1,
          borderBottomWidth: 2,
        },
        tabBarPressColor: colors.white,
      }}
    >
      <Tab.Screen
        name="JoinNovel"
        component={() => <JoinNovelTab public={joinNovel} />}
        options={{
          title: "참여 작품",
        }}
      />
      <Tab.Screen
        name="Collection"
        component={() => <CollectionTab public={collection} />}
        options={{
          title: "소설 컬렉션",
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfileNovelTab;
