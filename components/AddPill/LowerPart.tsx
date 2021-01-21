import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { screen, colors, fonts } from "../../globalVariable";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import Picker from "react-native-picker-select";
import { PillsInterface } from "../../pills.interface";
const LowerPart = () => {
  const [number, setNumber] = useState<number>(0);
  const [showDate, setShowDate] = useState<boolean>(false);
  const [hours, setHours] = useState<{ date: Date; id: number }[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const onChange = (event, selectedDate) => {
    setShowDate(false);
    setDate(selectedDate);
    setHours([...hours, { date: selectedDate, id: hours.length + 1 }]);
  };
  return (
    <View
      style={{
        flex: 0.5,
        backgroundColor: colors.bone,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
        justifyContent: "flex-start",
      }}
    >
      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity
          onPress={() => {
            setShowDate(true);
            console.log(showDate);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: colors.smoky_blue,
              borderBottomWidth: 1,
              marginHorizontal: screen.width * 0.1,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Ionicons
              name="time-outline"
              size={40}
              color={colors.observatory}
              style={{ paddingBottom: 10 }}
            ></Ionicons>
            <Text
              style={{
                fontSize: 20,
                color: colors.smoky_blue,
                marginLeft: screen.width * 0.11,
                paddingBottom: 10,
              }}
            >
              Add a time of the day
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {showDate ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      ) : (
        hours.map((hour) => {
          return (
            <View
              key={hour.id}
              style={{
                marginHorizontal: screen.width * 0.1,
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.roboto_medium,
                  color: colors.smoky_blue,
                  fontSize: 18,
                  marginRight: 10,
                }}
              >
                {hour.date.toLocaleTimeString()}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  const filteredHours = hours.filter((elem) => {
                    if (elem.id !== hour.id) return true;
                  });
                  setHours(filteredHours);
                }}
              >
                <Ionicons
                  name="close-circle-outline"
                  color={colors.carnation}
                  size={35}
                ></Ionicons>
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </View>
  );
};

export default LowerPart;
