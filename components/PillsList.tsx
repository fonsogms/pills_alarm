import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";
import { queryDB } from "../DB";
import { PillsInterface } from "../pills.interface";
const PillsList = ({ pills }: { pills: PillsInterface[] }) => {
  return (
    <ScrollView>
      {pills.map((pill) => {
        return <Text>{pill.name}</Text>;
      })}
    </ScrollView>
  );
};

export default PillsList;
