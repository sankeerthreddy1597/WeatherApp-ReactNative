import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CityWeatherScreen from "../screens/CityWeatherScreen";
import React from "react";

const Stack = createStackNavigator();

function stackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CityWeather"
        component={CityWeatherScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default stackNavigator;
