import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppMainRoot from "./src/navigations/AppMainRoot";
import NovelIndexScreen from "./src/screens/NovelMain/NovelIndexScreen";
import SignInScreen from "./src/screens/SignIn/SignInScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <SignInScreen /> */}
        <AppMainRoot />
        <StatusBar style="rgba(255, 255, 255, 1)" />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
