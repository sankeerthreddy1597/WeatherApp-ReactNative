import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default CityWeatherScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>City Weather Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
