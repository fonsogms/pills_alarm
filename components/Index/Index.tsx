import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddPill from "../AddPill/AddPill";
import { getDB, queryDB } from "../../DB";
import * as SQLite from "expo-sqlite";
import { colors, fonts, screen } from "../../globalVariable";
import AddButton from "./AddButton";
import PillsList from "./PillsList";
import { PillsInterface } from "../../pills.interface";
const Index = (props: any) => {
  const [pills, setPills] = useState<PillsInterface[]>([]);
  useEffect(() => {
    if (props.database) {
      console.log(props.database);
      getPills(props.database);
    }
  }, [props.database, props.route]);
  const getPills = async (database: SQLite.WebSQLDatabase) => {
    const response = await queryDB(database, "SELECT * FROM pills");
    console.log(response);
    const dbPills = response._array;
    setPills(dbPills);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: colors.bone,
          marginBottom: 20,
          width: "100%",
          marginLeft: screen.width * 0.2,
          paddingTop: 40,
        }}
      >
        <Text
          style={{
            fontFamily: fonts.roboto_bold,
            fontSize: 35,
            color: colors.bone,
            borderColor: "black",
            marginTop: screen.height * 0.1,
          }}
        >
          Your pills for the day
        </Text>
      </View>

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
