import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./routes/stackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {StatusBar.setBarStyle("light-content", true)}
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
