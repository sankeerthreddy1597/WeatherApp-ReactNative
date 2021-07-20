import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/theme/colors";
import AddCityModal from "../Components/AddCityModal";
import CityWeatherCard from "../Components/CityWeatherCard";

export default HomeScreen = ({ navigation }) => {
  const cities = [
    {
      key: "1",
      city: "Austin",
      country: "USA",
      temperature: "-2",
      weatherCondition: "snowy",
      rain: "17",
      wind: "8",
    },
    {
      key: "2",
      city: "Miami",
      country: "USA",
      temperature: "18",
      weatherCondition: "sunny",
      rain: "7",
      wind: "18",
    },
    {
      key: "3",
      city: "San Francisco",
      country: "USA",
      temperature: "28",
      weatherCondition: "cloudy",
      rain: "47",
      wind: "28",
    },
    {
      key: "4",
      city: "New York",
      country: "USA",
      temperature: "12",
      weatherCondition: "raining",
      rain: "87",
      wind: "14",
    },
    {
      key: "5",
      city: "Austin",
      country: "USA",
      temperature: "-2",
      weatherCondition: "snowy",
      rain: "17",
      wind: "8",
    },
    {
      key: "6",
      city: "Miami",
      country: "USA",
      temperature: "18",
      weatherCondition: "sunny",
      rain: "7",
      wind: "18",
    },
    {
      key: "7",
      city: "San Francisco",
      country: "USA",
      temperature: "28",
      weatherCondition: "cloudy",
      rain: "47",
      wind: "28",
    },
    {
      key: "8",
      city: "New York",
      country: "USA",
      temperature: "12",
      weatherCondition: "raining",
      rain: "87",
      wind: "14",
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        {/* Add City Modal */}
        <AddCityModal
          modalVisible={modalVisible}
          handleModalClose={handleModalClose}
        />

        {/* Add new City Button */}
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addCityContainer}
        >
          <Text style={styles.addCityText}>Add City</Text>
          <Ionicons name="add" size={20} color={COLORS.white}></Ionicons>
        </TouchableOpacity>

        {/* Separator */}
        <View style={styles.separator}></View>

        {/* Flatlist for cities weather */}
        <FlatList
          style={styles.cityList}
          data={cities}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CityWeatherCard
              cityDetails={item}
              onPress={() => navigation.navigate("CityWeather", item)}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryVariant,
    alignItems: "center",
  },
  safeContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  addCityText: {
    color: COLORS.onPrimary,
    fontSize: 20,
    marginRight: 10,
  },
  addCityContainer: {
    flexDirection: "row",
    width: "90%",
    height: 60,
    backgroundColor: COLORS.secondaryVariant,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    width: "80%",
    height: 1,
    borderWidth: 1,
    borderColor: COLORS.separator,
    marginVertical: 20,
  },
  cityList: {
    width: "90%",
  },
});
