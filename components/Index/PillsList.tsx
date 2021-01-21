import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { queryDB } from "../../DB";
import { PillsInterface } from "../../pills.interface";
const PillsList = ({ pills }: { pills: PillsInterface[] }) => {
  console.log(pills.length);
  return (
    <ScrollView>
      {pills.map((pill) => {
        console.log(pill.name, "this is the name");
        return (
          <View
            key={pill.id}
            style={{ height: 50, marginBottom: 10, width: 50 }}
          >
            <Text style={{ fontSize: 20 }}>{pill.name}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default PillsList;
