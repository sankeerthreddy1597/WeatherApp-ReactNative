import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../assets/theme/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

export default CityWeatherCard = ({ cityDetails, onPress }) => {
  const weatherConditionMap = {
    Snow: (
      <FontAwesome5
        name="snowflake"
        size={44}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Clear: (
      <Ionicons
        name="sunny"
        size={44}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Clouds: (
      <Ionicons
        name="cloudy"
        size={44}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Rain: (
      <FontAwesome5
        name="cloud-sun-rain"
        size={44}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      {/* Left - City */}
      <View style={styles.cardCityDetails}>
        <Text style={{ fontSize: 24, color: COLORS.onPrimary }}>
          {cityDetails.city}
        </Text>
        <Text style={{ fontSize: 16, color: COLORS.onPrimaryHint }}>
          {cityDetails.country}
        </Text>
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
          <Text
            style={{ fontSize: 26, color: COLORS.onPrimary, marginLeft: 10 }}
          >
            {cityDetails.temperature}°
          </Text>

          {/* Weather Condition Icon */}
          <View style={{ width: 44 }}>
            <MaskedView
              style={{ flex: 1, flexDirection: "row", height: 44 }}
              maskElement={
                <View
                  style={{
                    backgroundColor: "transparent",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {weatherConditionMap[cityDetails.weatherCondition]}
                </View>
              }
            >
              <LinearGradient
                colors={[
                  COLORS.secondaryVariant,
                  COLORS.secondaryVariantGradient,
                ]}
                style={{ flex: 1 }}
              ></LinearGradient>
            </MaskedView>
          </View>
          {/* End Weather Condition icon */}
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
            {cityDetails.rain}%
          </Text>
          <Feather name="wind" size={22} color={COLORS.onPrimary} />
          <Text style={{ marginHorizontal: 5, color: COLORS.onPrimary }}>
            {cityDetails.wind}km/h
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
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
    marginBottom: 10,
  },
  cardCityDetails: {
    justifyContent: "space-evenly",
    maxWidth: "50%",
  },
  cardTempDetails: {
    justifyContent: "space-between",
    paddingVertical: 5,
    width: "40%",
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});
