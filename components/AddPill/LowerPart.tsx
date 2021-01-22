import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { screen, colors, fonts, convertTime12to24 } from "../../globalVariable";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import Picker from "react-native-picker-select";
import { PillsInterface } from "../../pills.interface";
import { NewPill } from "./newPill.interface";
const LowerPart = ({
  newPill,
  setNewPill,
}: {
  newPill: NewPill;
  setNewPill: React.Dispatch<React.SetStateAction<NewPill>>;
}) => {
  const [showDate, setShowDate] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setShowDate(false);
      setDate(selectedDate);
      setNewPill({
        ...newPill,
        hours: [
          ...newPill.hours,
          { date: selectedDate, id: newPill.hours.length + 1 },
        ],
      });
    } else {
      setShowDate(false);
    }
  };
  return (
    <View
      style={{
        height: screen.height * 0.5,
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
        newPill.hours.map((hour) => {
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
                {convertTime12to24(hour.date.toLocaleTimeString())}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  const filteredHours = newPill.hours.filter((elem) => {
                    if (elem.id !== hour.id) return true;
                  });
                  setNewPill({ ...newPill, hours: filteredHours });
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
