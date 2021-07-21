import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../assets/theme/colors";
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addCity } from "../redux/actions/cities";

export default CityListItem = ({ item, handleModalClose }) => {
  const dispatch = useDispatch();

  const handleAddCity = () => {
    dispatch(addCity(item.city));
    handleModalClose();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleAddCity}>
      <EvilIcons name="location" size={24} color={COLORS.onPrimary} />
      <Text style={{ color: COLORS.onPrimary, fontSize: 17 }}>
        {item.city}, {item.state}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: COLORS.onPrimary,
    marginTop: 3,
    borderRadius: 4,
  },
});
