import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddPill from "../AddPill/AddPill";
import { getDB, queryDB } from "../../DB";
import * as SQLite from "expo-sqlite";
import {
  colors,
  convertTime12to24,
  fonts,
  PILLS_COLUMN_DAY,
  PILLS_COLUMN_TAKEN,
  screen,
} from "../../globalVariable";
import AddButton from "./AddButton";
import PillsList from "./PillsList";
import Header from "./Header";
import { PillsInterface } from "../../pills.interface";
const Index = (props: any) => {
  const [pills, setPills] = useState<PillsInterface[]>([]);
  useEffect(() => {
    if (props.database) {
      getPills(props.database);
    }
  }, [props.database, props.route]);
  const getPills = async (database: SQLite.WebSQLDatabase) => {
    const response = await queryDB(database, `SELECT * FROM pills`);
    console.log(response._array, "the response");
    let dbPills = response._array;
    dbPills.sort((a: PillsInterface, b: PillsInterface) => {
      const hour1 = convertTime12to24(a.time).replace(":", "");
      const hour2 = convertTime12to24(b.time).replace(":", "");
      return parseFloat(hour1) - parseFloat(hour2);
    });
    setPills(dbPills);
  };
  console.log("que pasa");
  return (
    <View style={styles.container}>
      <Header pills={pills}></Header>

      <PillsList
        pills={pills}
        setPills={setPills}
        database={props.database}
      ></PillsList>
      <AddButton navigation={props.navigation}></AddButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surf_green,
    //alignItems: "center",
  },
});

export default Index;
