import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddPill from "./addPill";
import { getDB, queryDB } from "../DB";
import * as SQLite from "expo-sqlite";
import { colors, screen } from "../globalVariable";
import AddButton from "./AddButton";
import PillsList from "./PillsList";
import { PillsInterface } from "../pills.interface";
const Index = () => {
  const [DB, setDB] = useState<SQLite.WebSQLDatabase>();
  const [pills, setPills] = useState<PillsInterface[]>([]);
  useEffect(() => {
    if (!DB) {
      getDB(setDB);
    } else {
      getPills(DB);
    }
  }, [DB]);

  const getPills = async (database: SQLite.WebSQLDatabase) => {
    const response = await queryDB(database, "SELECT * FROM pills");
    const dbPills = response._array;
    setPills(dbPills);
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Roboto-Medium",
          fontSize: 30,
          color: "grey",
          borderColor: "black",
          marginTop: screen.height * 0.1,
        }}
      >
        Your pills for the day
      </Text>
      <PillsList pills={pills}></PillsList>
      <AddButton></AddButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bone,
    alignItems: "center",
  },
});

export default Index;
