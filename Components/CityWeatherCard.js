import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../assets/theme/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default CityWeatherCard = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("CityWeather")}
    >
      {/* Left - City */}
      <View style={styles.cardCityDetails}>
        <Text style={{ fontSize: 38, color: COLORS.onPrimary }}>Austin</Text>
        <Text style={{ fontSize: 18, color: COLORS.onPrimaryHint }}>USA</Text>
      </View>
      {/* Right - Details */}
      <View style={styles.cardTempDetails}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 26, color: COLORS.onPrimary }}>22°</Text>
          <FontAwesome5
            name="snowflake"
            size={44}
            color={COLORS.secondaryVariant}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Feather name="droplet" size={22} color={COLORS.onPrimary} />
          <Text style={{ marginHorizontal: 5, color: COLORS.onPrimary }}>
            17%
          </Text>
          <Feather name="wind" size={22} color={COLORS.onPrimary} />
          <Text style={{ marginHorizontal: 5, color: COLORS.onPrimary }}>
            8km/h
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    backgroundColor: COLORS.primary,
    minHeight: 100,
    padding: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cardCityDetails: {
    justifyContent: "space-evenly",
  },
  cardTempDetails: {
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
