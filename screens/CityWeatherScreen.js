import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import { COLORS } from "../assets/theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getCityForecast } from "../redux/actions/cities";
import moment from "moment";

export default CityWeatherScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const cityForecast = useSelector((state) => state.cityReducer.cityForecast);

  useEffect(() => {
    dispatch(getCityForecast(route.params.id));
  }, [dispatch]);

  const weatherConditionMap = {
    Snow: (
      <FontAwesome5
        name="snowflake"
        size={350}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Clear: (
      <Ionicons
        name="sunny"
        size={350}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Clouds: (
      <Ionicons
        name="cloudy"
        size={350}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Rain: (
      <FontAwesome5
        name="cloud-sun-rain"
        size={350}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
  };

  const conditionMap = {
    Snow: (
      <FontAwesome5
        name="snowflake"
        size={22}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Clear: (
      <Ionicons
        name="sunny"
        size={22}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Clouds: (
      <Ionicons
        name="cloudy"
        size={22}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
    Rain: (
      <FontAwesome5
        name="cloud-sun-rain"
        size={22}
        color={COLORS.secondaryVariant}
        style={styles.shadow}
      />
    ),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "90%" }}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <AntDesign name="left" size={24} color={COLORS.secondaryVariant} />
        </TouchableOpacity>
        {/* Top City Details */}
        <View style={{ marginHorizontal: 10 }}>
          {/* City Name */}
          <Text style={styles.cityName}>{route.params.city}</Text>
          <Text style={styles.temp}>{route.params.temperature}??</Text>
          <View style={styles.condition}>
            <Text style={{ fontSize: 17, color: COLORS.onPrimary }}>
              {route.params.weatherCondition}
            </Text>
          </View>
        </View>
        {/* Weather Condition Icon */}
        <View
          style={{
            width: 350,
            position: "absolute",
            right: -140,
            top: -80,
            zIndex: -1,
          }}
        >
          <MaskedView
            style={{ flex: 1, flexDirection: "row", height: 350 }}
            maskElement={
              <View
                style={{
                  backgroundColor: "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {weatherConditionMap[route.params.weatherCondition]}
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

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 60,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="droplet" size={26} color={COLORS.secondaryVariant} />
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.onPrimary,
                fontSize: 19,
              }}
            >
              {route.params.rain}%
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="wind" size={26} color={COLORS.secondaryVariant} />
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.onPrimary,
                fontSize: 19,
              }}
            >
              {route.params.wind}km/h
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="weather-tornado"
              size={26}
              color={COLORS.secondaryVariant}
            />
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.onPrimary,
                fontSize: 19,
              }}
            >
              0%
            </Text>
          </View>
        </View>
        {/* Sunrise SunSet template */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 60,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="sunrise" size={22} color={COLORS.yellow} />
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.onPrimary,
                fontSize: 16,
              }}
            >
              {moment.unix(route.params.sunrise).format("h:mm a")}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.onPrimary,
                fontSize: 16,
              }}
            >
              {moment.unix(route.params.sunset).format("h:mm a")}
            </Text>
            <Feather
              name="sunset"
              size={22}
              color={COLORS.orange}
              style={{ marginLeft: 15 }}
            />
          </View>
        </View>

        {/* Forecast Prediction Template */}
        <FlatList
          style={styles.forecastList}
          data={cityForecast}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                marginTop: 15,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: COLORS.onPrimary, fontSize: 16 }}>
                {moment.unix(item.id).format("M/D, h:mm a")}
              </Text>
              {/* Icon start */}
              <View
                style={{
                  width: 22,
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <MaskedView
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    height: 22,
                  }}
                  maskElement={
                    <View
                      style={{
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {conditionMap[item.condition]}
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
              {/* Icon end */}
              <View
                style={{
                  flexDirection: "row",
                  width: "20%",
                  marginHorizontal: 10,
                }}
              >
                <Text style={{ color: COLORS.onPrimary, marginHorizontal: 4 }}>
                  {item.minTemp}
                </Text>
                <Text style={{ color: COLORS.onPrimary, marginHorizontal: 4 }}>
                  {item.maxTemp}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryVariant,
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  cityName: {
    marginTop: 30,
    color: COLORS.onPrimary,
    fontSize: 24,
    textShadowColor: COLORS.onPrimary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
  temp: {
    marginTop: 15,
    fontSize: 65,
    color: COLORS.onPrimary,
    textShadowColor: COLORS.onPrimary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
  },
  condition: {
    maxWidth: 120,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  backButton: {
    // top: Platform.OS === "ios" ? 44 : StatusBar.currentHeight,
    // left: 20,
    // position: "absolute",
    backgroundColor: COLORS.primary,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    maxWidth: 45,
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
  forecastList: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.onPrimary,
  },
});
