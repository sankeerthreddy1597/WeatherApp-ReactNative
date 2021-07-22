import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import * as Location from "expo-location";
import { addCityByLocation } from "../redux/actions/cities";

export default HomeScreen = ({ navigation }) => {
  const citiesList = useSelector((state) => state.cityReducer.citiesList);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        dispatch(
          addCityByLocation(location.coords.latitude, location.coords.longitude)
        );
      }
    })();
  }, []);

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
        {citiesList.length === 0 && (
          <Text
            style={{
              color: COLORS.onPrimaryHint,
              fontSize: 15,
              textTransform: "uppercase",
              marginTop: "15%",
            }}
          >
            Add Cities to display Weather.
          </Text>
        )}
        <FlatList
          style={styles.cityList}
          data={citiesList}
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
