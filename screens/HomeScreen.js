import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/theme/colors";
import AddCityModal from "../Components/AddCityModal";

export default HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeContainer}>
        <AddCityModal
          modalVisible={modalVisible}
          handleModalClose={handleModalClose}
        />
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addCityContainer}
        >
          <Text style={styles.addCityText}>Add City</Text>
          <Ionicons name="add" size={20} color={COLORS.white}></Ionicons>
        </TouchableOpacity>
        <View style={styles.separator}></View>
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
    marginTop: 20,
  },
});
