import React, { useState, useRef } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, screen } from "../../globalVariable";
import UpperPart from "./UpperPart";
import LowerPart from "./LowerPart";
const AddPill = (props: any) => {
  return (
    <View
      style={{
        backgroundColor: colors.surf_green,
        flex: 1,
        flexDirection: "column",
      }}
    >
      <TouchableOpacity
        style={{
          left: screen.width * 0.05,
          top: screen.height * 0.08,
          position: "absolute",
          zIndex: 1,
        }}
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      >
        <Ionicons name="arrow-back" color={colors.whitey} size={40}></Ionicons>
      </TouchableOpacity>

      <UpperPart></UpperPart>
      <LowerPart></LowerPart>
    </View>
  );
};

export default AddPill;
