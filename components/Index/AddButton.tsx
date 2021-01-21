import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, screen } from "../../globalVariable";
TouchableOpacity;
const AddButton = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Add_Pill");
      }}
      style={circlestyle.container}
    >
      <Ionicons name="add" size={40} color={colors.surf_green} />
    </TouchableOpacity>
  );
};
const circlestyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: screen.width * 0.2,
    position: "absolute",
    bottom: screen.height * 0.05,
    right: screen.width * 0.05,
    height: screen.width * 0.2,
    backgroundColor: colors.whitey,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
});
export default AddButton;
