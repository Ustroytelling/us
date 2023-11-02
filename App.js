import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import NovelIndexScreen from "./src/screens/NovelIndexScreen";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NovelIndexScreen />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
