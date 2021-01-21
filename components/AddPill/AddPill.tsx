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
import { NewPill } from "./newPill.interface";

const AddPill = (props: any) => {
  const [newPill, setNewPill] = useState<NewPill>({
    name: "",
    quantity: "",
    hours: [],
    days: 0,
    startingDate: new Date().toDateString(),
  });
  return (
    <View
      style={{
        backgroundColor: colors.surf_green,
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          paddingTop: screen.height * 0.08,
          color: colors.whitey,
          textAlign: "center",
        }}
      >
        Add a pill
      </Text>
      <TouchableOpacity
        style={{
          right: screen.width * 0.05,
          top: screen.height * 0.07,
          position: "absolute",
          zIndex: 1,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,

          elevation: 17,
        }}
        onPress={() => {
          console.log(newPill);
        }}
      >
        <Ionicons
          name={"add-circle"}
          color={colors.whitey}
          size={60}
        ></Ionicons>
      </TouchableOpacity>

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
      <UpperPart newPill={newPill} setNewPill={setNewPill}></UpperPart>
      <LowerPart newPill={newPill} setNewPill={setNewPill}></LowerPart>
    </View>
  );
};

export default AddPill;
