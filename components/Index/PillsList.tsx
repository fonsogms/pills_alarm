import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { queryDB } from "../../DB";
import { CheckBox } from "react-native-elements";
import { PillsInterface } from "../../pills.interface";
import { colors, fonts, screen } from "../../globalVariable";
import Swipeable from "react-native-gesture-handler/Swipeable";
import GestureRecognizer from "react-native-swipe-gestures";
const PillsList = ({ pills }: { pills: PillsInterface[] }) => {
  console.log(pills.length);

  return (
    <ScrollView>
      {pills.map((pill) => {
        console.log(pill.name, "this is the name");
        return (
          <View
            style={{
              height: 100,
              // backgroundColor: colors.bone,
              marginVertical: 8,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              flexDirection: "row",
            }}
            key={pill.id}
          >
            <CheckBox
              checkedIcon="dot-circle-o"
              checkedColor="red"
              checked={true}
            ></CheckBox>
            <Text
              style={{
                fontSize: 20,
                fontFamily: fonts.roboto_medium,
                color: colors.carnation,
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              }}
            >
              {pill.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default PillsList;
