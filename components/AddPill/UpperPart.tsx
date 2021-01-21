import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { colors, screen } from "../../globalVariable";
import DatePicker from "react-native-datepicker";
import { Colors } from "react-native/Libraries/NewAppScreen";
const UpperPart = () => {
  const [text, setText] = useState<string>("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View
      style={{
        flex: 0.5,
        backgroundColor: colors.surf_green,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          paddingTop: screen.height * 0.1,
          marginHorizontal: 30,
          justifyContent: "space-evenly",
        }}
      >
        <View>
          <Text style={{ color: colors.whitey, fontSize: 18 }}>Pill name</Text>
          <TextInput
            placeholder="Put something here"
            onChangeText={(input) => {
              setText(input);
            }}
            value={text}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#f2f2e1",
              height: 50,
              padding: 5,
              color: "white",
            }}
          ></TextInput>
        </View>
        <View>
          <Text style={{ color: colors.whitey, fontSize: 18 }}>
            Quantity per time you take them (could be pills, spoons etc.)
          </Text>
          <TextInput
            placeholder="Put something here"
            onChangeText={(input) => {
              setText(input);
            }}
            value={text}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#f2f2e1",
              height: 50,
              padding: 5,
              color: "white",
            }}
          ></TextInput>
        </View>
        <View>
          <Text
            style={{ color: colors.whitey, fontSize: 18, marginBottom: 10 }}
          >
            Starting from when?
          </Text>
          <DatePicker
            placeholder={"select date"}
            minDate={new Date()}
            date={date}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateText: { color: colors.whitey },
              // ... You can check the source to find the other keys.
            }}
            style={{ width: 200 }}
            onDateChange={(newDate) => {
              setDate(newDate);
            }}
          ></DatePicker>
        </View>
      </View>
    </View>
  );
};

export default UpperPart;
