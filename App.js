import { StatusBar } from "expo-status-bar";
import React from "react";
import ViewerScreen from "./src/screens/Viewer/ViewerScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <ViewerScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
