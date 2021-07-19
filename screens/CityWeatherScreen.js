import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../assets/theme/colors";

export default CityWeatherScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>City Weather Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.text}>Go back </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.onPrimary,
    fontSize: 20,
  },
  button: {
    backgroundColor: COLORS.secondaryVariant,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
});
