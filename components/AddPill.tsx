import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const AddPill = () => {
  const [text, setText] = useState<string>("");
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 20, marginTop: 50 }}>
      <TextInput
        placeholder="Put something here"
        onChangeText={(text) => {}}
        value={text}
        style={{
          borderWidth: 1,
          borderColor: "#f2f2e1",
          backgroundColor: "#eaeaea",
          height: 50,
          flex: 1,
          padding: 5,
        }}
      ></TextInput>
      <TouchableOpacity onPress={() => {}}>
        <View style={{ height: 50, backgroundColor: "#f2f2e1" }}>
          <Ionicons
            name="md-add"
            size={30}
            style={{ color: "red", padding: 10 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddPill;
