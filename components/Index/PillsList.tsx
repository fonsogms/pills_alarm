import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { queryDB } from "../../DB";
import { CheckBox } from "react-native-elements";
import { PillsInterface } from "../../pills.interface";
import { colors, fonts, screen } from "../../globalVariable";
import Swipeable from "react-native-gesture-handler/Swipeable";
import GestureRecognizer from "react-native-swipe-gestures";
const PillsList = ({
  pills,
  setPills,
  database,
}: {
  pills: PillsInterface[];
  setPills: React.Dispatch<React.SetStateAction<PillsInterface[]>>;
  database: SQLite.WebSQLDatabase;
}) => {
  const checkPill = async (id: number, taken: number): Promise<void> => {
    let newTakenValue: number;
    if (taken) newTakenValue = 0;
    else newTakenValue = 1;
    const response = await queryDB(
      database,
      `UPDATE pills SET taken = ${newTakenValue} WHERE id=${id}; `
    );
    console.log(response);
    const newPills = pills.map((elem) => {
      if (elem.id == id) return { ...elem, taken: newTakenValue };
      else return elem;
    });
    setPills(newPills);
  };
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
              uncheckedIcon="circle-o"
              checkedColor={colors.carnation}
              uncheckedColor={colors.larchmare}
              checked={pill.taken ? true : false}
              onPress={() => {
                console.log(pill.id);
                checkPill(pill.id, pill.taken);
              }}
            ></CheckBox>
            <Text
              key={pill.id}
              style={{
                fontSize: 20,
                fontFamily: fonts.roboto_medium,
                color: pill.taken ? colors.carnation : colors.bone,
                textDecorationLine: pill.taken ? "line-through" : "none",
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
