import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../assets/theme/colors";
import { EvilIcons } from "@expo/vector-icons";

export default CityListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <EvilIcons name="location" size={24} color={COLORS.onPrimary} />
      <Text style={{ color: COLORS.onPrimary, fontSize: 17 }}>
        {item.city}, {item.state}
      </Text>
    </View>
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
