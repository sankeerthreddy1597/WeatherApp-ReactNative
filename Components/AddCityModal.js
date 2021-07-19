import React from "react";
import {
  Modal,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  View,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../assets/theme/colors";

export default AddCityModal = ({ modalVisible, handleModalClose }) => {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      style={styles.modalContainer}
      onRequestClose={() => handleModalClose()}
    >
      <SafeAreaView style={styles.modalView}>
        <View style={styles.modalHeading}>
          <Text style={styles.modalTitle}>Add City</Text>
          <Pressable onPress={() => handleModalClose()}>
            <AntDesign name="close" size={24} color={COLORS.onPrimary} />
          </Pressable>
        </View>
        <View style={styles.modalBody}>
          <TextInput
            placeholder="Add new city..."
            style={styles.modalSearch}
            placeholderTextColor={COLORS.onPrimaryHint}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.primaryVariant,
  },
  modalHeading: {
    marginTop: 20,
    paddingHorizontal: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.separator,
  },
  modalTitle: {
    fontSize: 24,
    textTransform: "uppercase",
    color: COLORS.onPrimary,
  },
  modalBody: {
    marginTop: 30,
    width: "90%",
    paddingHorizontal: 10,
    // backgroundColor: COLORS.white,
  },
  modalSearch: {
    borderColor: COLORS.onPrimary,
    borderWidth: 1,
    color: COLORS.onPrimary,
    fontSize: 18,
    paddingLeft: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
